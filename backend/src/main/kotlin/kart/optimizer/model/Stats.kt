package kart.optimizer.model

import io.swagger.v3.oas.annotations.media.Schema

data class Stats(
    @Schema(example = "6")
    val weight: Int,
    @Schema(example = "2")
    val acceleration: Int,
    @Schema(example = "4")
    val onRoadTraction: Int,
    @Schema(example = "2")
    val offRoadTraction: Int,
    @Schema(example = "2")
    val miniTurbo: Int,
    @Schema(example = "6")
    val groundSpeed: Int,
    @Schema(example = "6")
    val waterSpeed: Int,
    @Schema(example = "6")
    val antiGravitySpeed: Int,
    @Schema(example = "6")
    val airSpeed: Int,
    @Schema(example = "4")
    val groundHandling: Int,
    @Schema(example = "4")
    val waterHandling: Int,
    @Schema(example = "4")
    val antiGravityHandling: Int,
    @Schema(example = "4")
    val airHandling: Int
) {
    fun toList(): List<Int> {
        return listOf(
            groundSpeed,
            acceleration,
            weight,
            offRoadTraction,
            groundHandling
        )
    }

    fun getStat(stat: StatNames): Int {
        return when (stat) {
            StatNames.Speed -> groundSpeed
            StatNames.Acceleration -> acceleration
            StatNames.Weight -> weight
            StatNames.Handling -> groundHandling
            StatNames.Traction -> offRoadTraction
        }
    }

    fun getStats(stats: List<StatNames>): List<Int> {
        return stats.map { getStat(it) }
    }

    fun getStatIndices(stats: List<StatNames>): List<Int> {
        return stats.map {
            when (it) {
                StatNames.Speed -> 0
                StatNames.Acceleration -> 1
                StatNames.Weight -> 2
                StatNames.Handling -> 3
                StatNames.Traction -> 4
            }
        }
    }

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
