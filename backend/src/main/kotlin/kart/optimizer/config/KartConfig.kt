package kart.optimizer.config

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kart.optimizer.model.Kart
import kart.optimizer.model.Part
import org.springframework.context.annotation.Configuration

@Configuration
open class KartConfig {
    var drivers: List<Part> = loadJson("/drivers.json")
    var bodies: List<Part> = loadJson("/bodies.json")
    var tires: List<Part> = loadJson("/tires.json")
    var gliders: List<Part> = loadJson("/gliders.json")
    var topKarts: List<Kart> = loadJson("/topKarts.json")

    private inline fun <reified T> loadJson(jsonFile: String): T {
        val jsonString = javaClass.getResource(jsonFile)?.readText() ?: "[]"
        val type = object : TypeToken<T>(){}.type
        return Gson().fromJson(jsonString, type)
    }
}
