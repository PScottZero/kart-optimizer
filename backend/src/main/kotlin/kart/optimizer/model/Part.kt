package kart.optimizer.model

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
data class Part(
    @ApiModelProperty(example = "Mario")
    val name: String,
    @ApiModelProperty(example = "https://mario.wiki.gallery/images/thumb/d/d9/MK8_Mario_Icon.png/64px-MK8_Mario_Icon.png")
    val img: String,
    val stats: Stats,
)
