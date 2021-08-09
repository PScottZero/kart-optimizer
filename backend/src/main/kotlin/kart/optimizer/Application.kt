package kart.optimizer

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.PathItem
import io.swagger.v3.oas.models.info.Info
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
open class Application {
    @Bean
    open fun api(): OpenAPI = OpenAPI()
        .info(
            Info()
                .title("Kart Optimizer Backend API Documentation")
        )
        .path("/optimizer/", PathItem())
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
