package kart.optimizer.config

import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.HandlerInterceptor
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Configuration
open class LoggerConfig: WebMvcConfigurer {
    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(LoggerInterceptor())
    }
}

class LoggerInterceptor : HandlerInterceptor {
    private val logger = LoggerFactory.getLogger(LoggerInterceptor::class.java)

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, dataObject: Any) : Boolean {
        logger.info("--> ${request.method} ${request.requestURI}")
        logger.info("<-- ${response.status} ${getStatusLabel(response.status)}")
        return true
    }

    private fun getStatusLabel(status: Int): String {
        return when (status) {
            200 -> "OK"
            400 -> "Not Found"
            else -> "Unhandled Code"
        }
    }
}