import com.google.gson.GsonBuilder
import java.io.File

class KartDataWriter {
    companion object {
        private val CATEGORIES = listOf("bodies", "drivers", "tires", "gliders")

        private val gson = GsonBuilder()
            .setPrettyPrinting()
            .create()

        fun write(parts: MarioKart8Parts) {
            for ((index, category) in CATEGORIES.withIndex()) {
                File("json/$category.json").also {
                    it.parentFile.mkdir()
                }.bufferedWriter().use {
                    gson.toJson(parts[index], it)
                }
            }
            File("json/karts.json").bufferedWriter().use {
                gson.toJson(generateAllKartCombinations(parts), it)
            }
        }

        private fun generateAllKartCombinations(parts: MarioKart8Parts): List<Kart> {
            val karts = HashMap<Stats, Kart>()
            parts[0].forEach { body ->
                parts[1].forEach { driver ->
                    parts[2].forEach { tire ->
                        parts[3].forEach { glider ->
                            val kart = Kart(
                                setOf(driver.name),
                                setOf(body.name),
                                setOf(tire.name),
                                setOf(glider.name),
                                createStatList(listOf(
                                    driver, body, tire, glider
                                ))
                            )
                            if (karts.contains(kart.stats)) {
                                karts[kart.stats]?.merge(kart)
                            } else {
                                karts[kart.stats] = kart
                            }
                        }
                    }
                }
            }
            return karts.map { it.value }
        }

        private fun createStatList(parts: List<Part>): Stats {
            return Stats(
                weight = parts.sumOf { it.stats.weight },
                acceleration =  parts.sumOf { it.stats.acceleration },
                onRoadTraction = parts.sumOf { it.stats.onRoadTraction },
                offRoadTraction = parts.sumOf { it.stats.offRoadTraction },
                miniTurbo = parts.sumOf { it.stats.miniTurbo },
                groundSpeed = parts.sumOf { it.stats.groundSpeed },
                waterSpeed = parts.sumOf { it.stats.waterSpeed },
                antiGravitySpeed = parts.sumOf { it.stats.antiGravitySpeed },
                airSpeed = parts.sumOf { it.stats.airSpeed },
                groundHandling = parts.sumOf { it.stats.groundHandling },
                waterHandling = parts.sumOf { it.stats.waterHandling },
                antiGravityHandling = parts.sumOf { it.stats.antiGravityHandling },
                airHandling = parts.sumOf { it.stats.airHandling }
            )
        }
    }
}