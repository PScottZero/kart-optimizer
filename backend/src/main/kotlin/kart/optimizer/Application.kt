package kart.optimizer

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
@EnableSwagger2
open class Application {
    @Bean
    open fun api(): Docket = Docket(DocumentationType.SWAGGER_2)
        .useDefaultResponseMessages(false)
        .select()
        .apis(RequestHandlerSelectors.basePackage("kart.optimizer"))
        .paths(PathSelectors.any())
        .build()
        .apiInfo(
            ApiInfoBuilder()
                .title("Kart Optimizer Backend API Documentation")
                .build()
        )
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
