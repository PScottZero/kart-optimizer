package kart.optimizer.model

class Kart(
    var driver: Part,
    var body: Part,
    var tire: Part,
    var glider: Part,
    val stats: Stats = Stats.sumOfStats(listOf(driver, body, tire, glider))
)
