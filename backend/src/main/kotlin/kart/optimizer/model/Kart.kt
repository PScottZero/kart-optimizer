package kart.optimizer.model

class Kart(
    val driver: Part,
    val body: Part,
    val tire: Part,
    val glider: Part,
    val stats: Stats = Stats.sumOfStats(listOf(driver, body, tire, glider))
) {
    fun getStat(stat: StatNames): Int {
        return when (stat) {
            StatNames.Speed -> this.stats.groundSpeed
            StatNames.Acceleration -> this.stats.acceleration
            StatNames.Weight -> this.stats.weight
            StatNames.Handling -> this.stats.groundHandling
            StatNames.Traction -> this.stats.offRoadTraction
        }
    }

    fun getStats(stats: List<StatNames>): List<Int> {
        return stats.map { getStat(it) }
    }
}
