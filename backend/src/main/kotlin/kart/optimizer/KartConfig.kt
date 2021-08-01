package kart.optimizer

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kart.optimizer.model.Part
import org.springframework.context.annotation.Configuration
import java.io.File

@Configuration
open class KartConfig {
    var drivers: List<Part> = loadPartJson("./json/drivers.json")
    var bodies: List<Part> = loadPartJson("./json/bodies.json")
    var tires: List<Part> = loadPartJson("./json/tires.json")
    var gliders: List<Part> = loadPartJson("./json/gliders.json")
}

fun loadPartJson(jsonFile: String): List<Part> {
    val jsonString = File(jsonFile).readText(Charsets.UTF_8)
    val type = object : TypeToken<List<Part>>(){}.type
    return Gson().fromJson(jsonString, type)
}
