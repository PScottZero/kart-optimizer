import com.google.gson.Gson
import java.io.File

class KartDataWriter {
    companion object {
        private val CATEGORIES = listOf("bodies", "drivers", "tires", "gliders")

        private val gson = Gson()

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
            val karts = ArrayList<Kart>()
            parts[0].forEach { body ->
                parts[1].forEach { driver ->
                    parts[2].forEach { tire ->
                        parts[3].forEach { glider ->
                            karts.add(Kart(
                                driver = driver.name,
                                body = body.name,
                                tire = tire.name,
                                glider = glider.name,
                                stats = createStatList(listOf(
                                    driver, body, tire, glider
                                ))
                            ))
                        }
                    }
                }
            }
            return karts
        }

        private fun createStatList(parts: List<Part>): List<Int> {
            return listOf(
                parts.sumOf { it.stats.weight },
                parts.sumOf { it.stats.acceleration },
                parts.sumOf { it.stats.onRoadTraction },
                parts.sumOf { it.stats.offRoadTraction },
                parts.sumOf { it.stats.miniTurbo },
                parts.sumOf { it.stats.groundSpeed },
                parts.sumOf { it.stats.waterSpeed },
                parts.sumOf { it.stats.antiGravitySpeed },
                parts.sumOf { it.stats.airSpeed },
                parts.sumOf { it.stats.groundHandling },
                parts.sumOf { it.stats.waterHandling },
                parts.sumOf { it.stats.antiGravityHandling },
                parts.sumOf { it.stats.airHandling }
            )
        }
    }
}