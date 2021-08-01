package kart.optimizer.model

data class Stats(
    val weight: Int,
    val acceleration: Int,
    val onRoadTraction: Int,
    val offRoadTraction: Int,
    val miniTurbo: Int,
    val groundSpeed: Int,
    val waterSpeed: Int,
    val antiGravitySpeed: Int,
    val airSpeed: Int,
    val groundHandling: Int,
    val waterHandling: Int,
    val antiGravityHandling: Int,
    val airHandling: Int
) {
    companion object {
        fun sumOfStats(parts: List<Part>): Stats {
            return Stats(
                weight = parts.fold(0) { sum, part -> sum + part.stats.weight },
                acceleration = parts.fold(0) { sum, part -> sum + part.stats.acceleration },
                onRoadTraction = parts.fold(0) { sum, part -> sum + part.stats.onRoadTraction },
                offRoadTraction = parts.fold(0) { sum, part -> sum + part.stats.offRoadTraction },
                miniTurbo = parts.fold(0) { sum, part -> sum + part.stats.miniTurbo },
                groundSpeed = parts.fold(0) { sum, part -> sum + part.stats.groundSpeed },
                waterSpeed = parts.fold(0) { sum, part -> sum + part.stats.waterSpeed },
                antiGravitySpeed = parts.fold(0) { sum, part -> sum + part.stats.antiGravitySpeed },
                airSpeed = parts.fold(0) { sum, part -> sum + part.stats.airSpeed },
                groundHandling = parts.fold(0) { sum, part -> sum + part.stats.groundHandling },
                waterHandling = parts.fold(0) { sum, part -> sum + part.stats.waterHandling },
                antiGravityHandling = parts.fold(0) { sum, part -> sum + part.stats.antiGravityHandling },
                airHandling = parts.fold(0) { sum, part -> sum + part.stats.airHandling },
            )
        }
    }
}