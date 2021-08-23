package kart.optimizer.controller

import io.swagger.v3.oas.annotations.OpenAPIDefinition
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import io.swagger.v3.oas.annotations.tags.Tag
import kart.optimizer.config.KartConfig
import kart.optimizer.model.Part
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/parts")
@Tag(name = "Part Controller")
class PartController {
    @Autowired
    private lateinit var kartConfig: KartConfig

    @GetMapping("/drivers")
    @CrossOrigin(origins = ["*"])
    @Operation(
        summary = "Return list of drivers"
    )
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getDrivers(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.drivers)
    }

    @GetMapping("/bodies")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of bodies")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getBodies(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.bodies)
    }

    @GetMapping("/tires")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of tires")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getTires(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.tires)
    }

    @GetMapping("/gliders")
    @CrossOrigin(origins = ["*"])
    @Operation(summary = "Return list of gliders")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Retrieved drivers",
                content = [
                    Content(
                        array = ArraySchema(
                            schema = Schema(
                                implementation = Part::class
                            )
                        )
                    )
                ]
            )
        ]
    )
    fun getGliders(): ResponseEntity<List<Part>> {
        return ResponseEntity.ok(kartConfig.gliders)
    }
}