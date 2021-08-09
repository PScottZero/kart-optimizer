package kart.optimizer.model

import io.swagger.v3.oas.annotations.media.Schema

data class TopKartsRequest(
    val fixedDriver: String?,
    val fixedBody: String?,
    val fixedTire: String?,
    val fixedGlider: String?,
    @Schema(example = "[\"Speed\", \"Acceleration\"]")
    val priorityStats: List<StatNames>,
    @Schema(example = "[\"Weight\", \"Handling\", \"Traction\"]")
    val regularStats: List<StatNames>,
    @Schema(example = "100")
    val maxCount: Int
)