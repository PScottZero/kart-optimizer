package kart.optimizer.model

data class TopKartsRequest(
    val fixedDriver: Part?,
    val fixedBody: Part?,
    val fixedTire: Part?,
    val fixedGlider: Part?,
    val priorityStats: List<StatNames>,
    val regularStats: List<StatNames>,
    val kartCount: Int
)