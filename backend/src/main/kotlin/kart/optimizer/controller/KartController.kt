package kart.optimizer.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import kart.optimizer.config.KartConfig
import kart.optimizer.model.*
import kart.optimizer.util.KartComparator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import kotlin.math.abs

@RestController
@RequestMapping("/optimizer/")
class KartController {
    @Autowired
    private lateinit var kartConfig: KartConfig

    @GetMapping("/drivers")
    @CrossOrigin(origins = ["*"])
    @Operation(
        summary = "Return list of drivers"
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getDrivers(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.drivers)
    }

    @GetMapping("/bodies")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of bodies")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getBodies(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.bodies)
    }

    @GetMapping("/tires")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of tires")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getTires(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.tires)
    }

    @GetMapping("/gliders")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of gliders")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getGliders(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.gliders)
    }

    @PostMapping("/topKarts")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of top karts given constraints")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getTopKarts(
        @RequestBody topKartsRequest: TopKartsRequest
    ): ResponseEntity<List<Kart>> {
        val karts = kartConfig.topKarts.sortedWith(
            KartComparator(
                topKartsRequest.priorityStats,
                topKartsRequest.regularStats
            )
        ).filter {
            (topKartsRequest.fixedDriver == null || it.drivers.contains(topKartsRequest.fixedDriver)) &&
                    (topKartsRequest.fixedBody == null || it.drivers.contains(topKartsRequest.fixedBody)) &&
                    (topKartsRequest.fixedTire == null || it.drivers.contains(topKartsRequest.fixedTire)) &&
                    (topKartsRequest.fixedGlider == null || it.drivers.contains(topKartsRequest.fixedGlider))
        }.map {
            it.drivers = it.drivers.filter { driver -> topKartsRequest.fixedDriver == null || topKartsRequest.fixedDriver == driver }
            it.bodies = it.bodies.filter { body -> topKartsRequest.fixedBody == null || topKartsRequest.fixedBody == body }
            it.tires = it.tires.filter { tire -> topKartsRequest.fixedTire == null || topKartsRequest.fixedTire == tire }
            it.gliders = it.gliders.filter { glider -> topKartsRequest.fixedGlider == null || topKartsRequest.fixedGlider == glider }
            it
        }
        val endIndex = if (topKartsRequest.maxCount > karts.size) karts.size else topKartsRequest.maxCount
        return ResponseEntity.ok(karts.subList(0, endIndex))
    }
}