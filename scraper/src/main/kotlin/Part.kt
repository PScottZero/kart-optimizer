data class Part(
    val name: String,
    val img: String,
    val stats: Stats
)

typealias PartCategory = ArrayList<Part>
typealias MarioKart8Parts = List<PartCategory>
