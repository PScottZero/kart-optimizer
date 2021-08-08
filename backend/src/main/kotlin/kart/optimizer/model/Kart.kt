package kart.optimizer.model

data class Kart(
    var drivers: List<String>,
    var bodies: List<String>,
    var tires: List<String>,
    var gliders: List<String>,
    val stats: Stats
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
