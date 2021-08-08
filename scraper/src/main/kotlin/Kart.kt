data class Kart(
    var drivers: Set<String>,
    var bodies: Set<String>,
    var tires: Set<String>,
    var gliders: Set<String>,
    var stats: Stats
) {
    fun merge(kart: Kart) {
        drivers = drivers.plus(kart.drivers)
        bodies = bodies.plus(kart.bodies)
        tires = tires.plus(kart.tires)
        gliders = gliders.plus(kart.gliders)
    }
}
