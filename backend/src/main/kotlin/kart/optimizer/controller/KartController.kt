package kart.optimizer.controller

import io.swagger.annotations.*
import kart.optimizer.config.KartConfig
import kart.optimizer.model.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import kotlin.math.abs

@RestController
class KartController {
    @Autowired
    private lateinit var kartConfig: KartConfig

    @GetMapping("/drivers")
    @CrossOrigin(origins = ["*"])
    @ApiOperation("Return list of drivers")
    @ApiResponses(
        value = [
            ApiResponse(
                code = 200,
                message = "Retrieved drivers",
                response = Part::class,
                responseContainer = "List"
            )
        ]
    )
    fun getDrivers(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.drivers)
    }

    @GetMapping("/bodies")
    @CrossOrigin(origins = ["*"])
    @ApiOperation("Return list of bodies")
    @ApiResponses(
        value = [
            ApiResponse(
                code = 200,
                message = "Retrieved bodies",
                response = Part::class,
                responseContainer = "List"
            )
        ]
    )
    fun getBodies(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.bodies)
    }

    @GetMapping("/tires")
    @CrossOrigin(origins = ["*"])
    @ApiOperation("Return list of tires")
    @ApiResponses(
        value = [
            ApiResponse(
                code = 200,
                message = "Retrieved tires",
                response = Part::class,
                responseContainer = "List"
            )
        ]
    )
    fun getTires(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.tires)
    }

    @GetMapping("/gliders")
    @CrossOrigin(origins = ["*"])
    @ApiOperation("Return list of gliders")
    @ApiResponses(
        value = [
            ApiResponse(
                code = 200,
                message = "Retrieved gliders",
                response = Part::class,
                responseContainer = "List"
            )
        ]
    )
    fun getGliders(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.gliders)
    }

    @PostMapping("/topKarts")
    @CrossOrigin(origins = ["*"])
    @ApiOperation("Return list of top karts given constraints")
    @ApiResponses(
        value = [
            ApiResponse(
                code = 200,
                message = "Retrieved top karts",
                response = Kart::class,
                responseContainer = "List"
            )
        ]
    )
    fun getTopKarts(
        @RequestBody topKartsRequest: TopKartsRequest
    ): ResponseEntity<List<Kart>> {
        val drivers = if (topKartsRequest.fixedDriver != null) {
            listOf(topKartsRequest.fixedDriver)
        } else kartConfig.drivers
        val bodies: List<Part> = if (topKartsRequest.fixedBody != null) {
            listOf(topKartsRequest.fixedBody)
        } else kartConfig.bodies
        val tires: List<Part> = if (topKartsRequest.fixedTire != null) {
            listOf(topKartsRequest.fixedTire)
        } else kartConfig.tires
        val gliders: List<Part> = if (topKartsRequest.fixedGlider != null) {
            listOf(topKartsRequest.fixedGlider)
        } else kartConfig.gliders
        val karts = ArrayList<Kart>()
        drivers.forEach { driver ->
            bodies.forEach { body ->
                tires.forEach { tire ->
                    gliders.forEach { glider ->
                        karts.add(Kart(
                            driver = driver,
                            body = body,
                            tire = tire,
                            glider = glider
                        ))
                    }
                }
            }
        }
        karts.sortWith { kart1, kart2 ->
            compareStats(kart1, kart2, topKartsRequest.priorityStats, topKartsRequest.regularStats)
        }
        val endIndex = if (topKartsRequest.kartCount > karts.size) karts.size else topKartsRequest.kartCount
        return ResponseEntity.ok(karts.subList(0, endIndex))
    }

    private fun compareStats(
        kart1: Kart,
        kart2: Kart,
        priorityStats: List<StatNames>,
        regularStats: List<StatNames>
    ): Int {
        return if (priorityStats.isNotEmpty()) {
            val kart1StatSum = sumOfPriorityStats(kart1, priorityStats)
            val kart2StatSum = sumOfPriorityStats(kart2, priorityStats)
            if (kart1StatSum < kart2StatSum) {
                1
            } else if (kart1StatSum > kart2StatSum) {
                -1
            } else {
                compareAbsDiff(kart1, kart2, priorityStats, regularStats)
            }
        } else compareRegularStats(kart1, kart2, regularStats)
    }

    private fun sumOfPriorityStats(kart: Kart, priorityStats: List<StatNames>): Int {
        return priorityStats.map { kart.getStat(it) }.fold(0) { sum, value -> sum + value }
    }

    private fun compareRegularStats(
        kart1: Kart,
        kart2: Kart,
        regularStats: List<StatNames>,
        index: Int = 0
    ): Int {
        return if (index < regularStats.size) {
            val kart1Stat = kart1.getStat(regularStats[index])
            val kart2Stat = kart2.getStat(regularStats[index])
            if (kart1Stat < kart2Stat) {
                1
            } else if (kart1Stat > kart2Stat) {
                -1
            } else {
                compareRegularStats(kart1, kart2, regularStats, index + 1)
            }
        } else 0
    }

    private fun compareAbsDiff(
        kart1: Kart,
        kart2: Kart,
        priorityStats: List<StatNames>,
        regularStats: List<StatNames>
    ): Int {
        val kart1AbsDiff = absDiff(kart1, priorityStats)
        val kart2AbsDiff = absDiff(kart2, priorityStats)
        return if (kart1AbsDiff < kart2AbsDiff) {
            -1
        } else if (kart1AbsDiff > kart2AbsDiff) {
            1
        } else {
            return comparePriorityStats(kart1, kart2, priorityStats, regularStats)
        }
    }

    private fun absDiff(kart: Kart, priorityStats: List<StatNames>): Int {
        val mean = kart.getStats(priorityStats).fold(0) { sum, stat -> sum + stat } / priorityStats.size
        return kart.getStats(priorityStats).map {
            abs(it - mean)
        }.fold(0) { sum, value ->
            sum + value
        }
    }

    private fun comparePriorityStats(
        kart1: Kart,
        kart2: Kart,
        priorityStats: List<StatNames>,
        regularStats: List<StatNames>,
        index: Int = 0
    ): Int {
        return if (index < priorityStats.size) {
            val kart1Stat = kart1.getStat(priorityStats[index])
            val kart2Stat = kart2.getStat(priorityStats[index])
            if (kart1Stat < kart2Stat) {
                1
            } else if (kart1Stat > kart2Stat) {
                -1
            } else {
                comparePriorityStats(kart1, kart2, priorityStats, regularStats, index + 1)
            }
        } else compareRegularStats(kart1, kart2, regularStats)
    }
}