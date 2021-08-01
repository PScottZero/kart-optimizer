package kart.optimizer.model

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
data class Stats(
    @ApiModelProperty(example = "6")
    val weight: Int,
    @ApiModelProperty(example = "2")
    val acceleration: Int,
    @ApiModelProperty(example = "4")
    val onRoadTraction: Int,
    @ApiModelProperty(example = "2")
    val offRoadTraction: Int,
    @ApiModelProperty(example = "2")
    val miniTurbo: Int,
    @ApiModelProperty(example = "6")
    val groundSpeed: Int,
    @ApiModelProperty(example = "6")
    val waterSpeed: Int,
    @ApiModelProperty(example = "6")
    val antiGravitySpeed: Int,
    @ApiModelProperty(example = "6")
    val airSpeed: Int,
    @ApiModelProperty(example = "4")
    val groundHandling: Int,
    @ApiModelProperty(example = "4")
    val waterHandling: Int,
    @ApiModelProperty(example = "4")
    val antiGravityHandling: Int,
    @ApiModelProperty(example = "4")
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