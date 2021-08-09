package kart.optimizer.model

data class Kart(
    var drivers: List<String>,
    var bodies: List<String>,
    var tires: List<String>,
    var gliders: List<String>,
    val stats: Stats
)
