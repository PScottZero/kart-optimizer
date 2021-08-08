package kart.optimizer.model

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
data class TopKartsRequest(
    val fixedDriver: String?,
    val fixedBody: String?,
    val fixedTire: String?,
    val fixedGlider: String?,
    @ApiModelProperty(example = "[\"Speed\", \"Acceleration\"]")
    val priorityStats: List<StatNames>,
    @ApiModelProperty(example = "[\"Weight\", \"Handling\", \"Traction\"]")
    val regularStats: List<StatNames>,
    @ApiModelProperty(example = "100")
    val maxCount: Int
)