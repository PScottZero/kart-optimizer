package kart.optimizer.config

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kart.optimizer.model.Part
import org.springframework.context.annotation.Configuration

@Configuration
open class KartConfig {
    var drivers: List<Part> = loadPartJson("/drivers.json")
    var bodies: List<Part> = loadPartJson("/bodies.json")
    var tires: List<Part> = loadPartJson("/tires.json")
    var gliders: List<Part> = loadPartJson("/gliders.json")

    private fun loadPartJson(jsonFile: String): List<Part> {
        val jsonString = javaClass.getResource(jsonFile)?.readText() ?: "[]"
        val type = object : TypeToken<List<Part>>(){}.type
        return Gson().fromJson(jsonString, type)
    }
}
