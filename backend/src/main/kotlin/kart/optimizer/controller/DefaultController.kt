package kart.optimizer.controller

import io.swagger.v3.oas.annotations.Hidden
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DefaultController {
    @Hidden
    @GetMapping("/")
    fun getHome(): ResponseEntity<String> {
        return ResponseEntity.ok(javaClass.getResource("/index.html")?.readText() ?: "Kart Optimizer Backend")
    }

    @Hidden
    @GetMapping("/mario-kart-8.jpg")
    fun getHomeImage(): ResponseEntity<ByteArray> {
        return ResponseEntity.ok(javaClass.getResource("/mario-kart-8.jpg")?.readBytes() ?: ByteArray(0))
    }

    @Hidden
    @GetMapping("/error")
    fun getError(): ResponseEntity<String> {
        return ResponseEntity.ok("Kart Optimizer Backend Error!")
    }
}
