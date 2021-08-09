package kart.optimizer.model

import io.swagger.v3.oas.annotations.media.Schema

data class Part(
    @Schema(example = "Mario")
    val name: String,
    @Schema(example = "https://mario.wiki.gallery/images/thumb/d/d9/MK8_Mario_Icon.png/64px-MK8_Mario_Icon.png")
    val img: String,
    val stats: Stats,
)
