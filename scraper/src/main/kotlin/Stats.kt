data class Stats(
    val weight: Int = 0,
    val acceleration: Int = 0,
    val onRoadTraction: Int = 0,
    val offRoadTraction: Int = 0,
    val miniTurbo: Int = 0,
    val groundSpeed: Int = 0,
    val waterSpeed: Int = 0,
    val antiGravitySpeed: Int = 0,
    val airSpeed: Int = 0,
    val groundHandling: Int = 0,
    val waterHandling: Int = 0,
    val antiGravityHandling: Int = 0,
    val airHandling: Int = 0
) {
    override fun equals(other: Any?): Boolean {
        if (other is Stats) {
            return this.weight == other.weight &&
                    this.acceleration == other.acceleration &&
                    this.onRoadTraction == other.onRoadTraction &&
                    this.offRoadTraction == other.offRoadTraction &&
                    this.miniTurbo == other.miniTurbo &&
                    this.groundSpeed == other.groundSpeed &&
                    this.waterSpeed == other.waterSpeed &&
                    this.antiGravitySpeed == other.antiGravitySpeed &&
                    this.airSpeed == other.airSpeed &&
                    this.groundHandling == other.groundHandling &&
                    this.waterHandling == other.waterHandling &&
                    this.antiGravityHandling == other.antiGravityHandling &&
                    this.airHandling == other.airHandling
        }
        return false
    }

    override fun hashCode(): Int {
        return weight.hashCode() *
                acceleration.hashCode() *
                onRoadTraction.hashCode() *
                offRoadTraction.hashCode() *
                miniTurbo.hashCode() *
                groundSpeed.hashCode() *
                waterSpeed.hashCode() *
                antiGravitySpeed.hashCode() *
                airSpeed.hashCode() *
                groundHandling.hashCode() *
                waterHandling.hashCode() *
                antiGravityHandling.hashCode() *
                airHandling.hashCode()
    }
}
