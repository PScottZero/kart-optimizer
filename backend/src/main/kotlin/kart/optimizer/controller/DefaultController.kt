package kart.optimizer.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DefaultController {
    @GetMapping("/")
    fun getHome(): ResponseEntity<String> {
        return ResponseEntity.ok(javaClass.getResource("/index.html")?.readText() ?: "Kart Optimizer Backend")
    }

    @GetMapping("/error")
    fun getError(): ResponseEntity<String> {
        return ResponseEntity.ok("Kart Optimizer Backend Error!")
    }
}
