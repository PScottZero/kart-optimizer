package kart.optimizer.model

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
data class TopKartsRequest(
    val fixedDriver: Part?,
    val fixedBody: Part?,
    val fixedTire: Part?,
    val fixedGlider: Part?,
    @ApiModelProperty(example = "[\"Speed\", \"Acceleration\"]")
    val priorityStats: List<StatNames>,
    @ApiModelProperty(example = "[\"Weight\", \"Handling\", \"Traction\"]")
    val regularStats: List<StatNames>,
    @ApiModelProperty(example = "100")
    val kartCount: Int
)