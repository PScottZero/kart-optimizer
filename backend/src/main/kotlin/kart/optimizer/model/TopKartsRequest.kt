package kart.optimizer.model

import io.swagger.v3.oas.annotations.media.Schema

data class TopKartsRequest(
    val fixedDriver: Part?,
    val fixedBody: Part?,
    val fixedTire: Part?,
    val fixedGlider: Part?,
    @Schema(example = "[\"Speed\", \"Acceleration\"]")
    val priorityStats: List<StatNames>,
    @Schema(example = "[\"Weight\", \"Handling\", \"Traction\"]")
    val regularStats: List<StatNames>,
    @Schema(example = "100")
    val maxCount: Int
)