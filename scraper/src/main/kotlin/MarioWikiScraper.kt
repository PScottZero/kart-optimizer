import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL

fun main() { MarioWikiScraper.run() }

class MarioWikiScraper {
    companion object {
        private const val TABLE_START = "<table class=\"wikitable sortable"
        private const val ROW_START = "<tr>"
        private const val PART_NAME_START = "title=\""
        private const val IMAGE_URL_START = "src=\""
        private const val DATA_START = "<td>"
        private const val TABLE_END = "</table>"
        private const val CATEGORY_COUNT = 4;

        private var html: List<String> = emptyList()
        private var currentIndex: Int = 0

        fun run() = KartDataWriter.write(this.scrape())

        private fun scrape(): MarioKart8Parts {
            html = htmlLines()
            currentIndex = 0
            val partCategories = ArrayList<PartCategory>()
            while (currentIndex < html.size) {
                partCategories.add(parseTable())
                if (partCategories.size == CATEGORY_COUNT) break
            }
            return partCategories
        }

        private fun parseTable(): PartCategory {
            val partCategory = PartCategory()
            nextTable()
            nextRow()
            while (hasNextRow()) {
                partCategory.add(parsePart())
                if (isAtTableEnd()) break
            }
            return partCategory
        }

        private fun parsePart(): Part {
            nextRow()
            return Part(
                nextPartName(),
                nextPartImage(),
                Stats(
                    nextStat(2),
                    nextStat(), nextStat(), nextStat(), nextStat(),
                    nextStat(), nextStat(), nextStat(), nextStat(),
                    nextStat(), nextStat(), nextStat(), nextStat(),
                )
            )
        }

        private fun htmlLines(): List<String> {
            val marioWikiUrl = URL("https://www.mariowiki.com/Mario_Kart_8_Deluxe_in-game_statistics")
            val urlConnection = marioWikiUrl.openConnection() as HttpURLConnection

            return try {
                val text = urlConnection.inputStream.bufferedReader().readText()
                urlConnection.disconnect()
                text.split('\n')
            } catch (ex: IOException) {
                urlConnection.disconnect()
                emptyList()
            }
        }

        private fun nextTable() {
            while (currentIndex < html.size && !html[currentIndex].contains(TABLE_START)) currentIndex ++
            currentIndex ++
        }

        private fun nextRow() {
            for (i in currentIndex until html.size) {
                if (html[i].contains(ROW_START)) {
                    currentIndex = i + 1
                    return
                }
            }
            currentIndex = html.size
        }

        private fun nextPartName(): String {
            val preIndex = html[currentIndex].indexOf(PART_NAME_START) + PART_NAME_START.length
            val startIndex = html[currentIndex].indexOf(">", preIndex) + 1
            val endIndex = html[currentIndex].indexOf("<", startIndex)
            return html[currentIndex].substring(startIndex, endIndex)
        }

        private fun nextPartImage(): String {
            val startIndex = html[currentIndex].indexOf(IMAGE_URL_START) + IMAGE_URL_START.length
            val endIndex = html[currentIndex].indexOf("\"", startIndex)
            return html[currentIndex].substring(startIndex, endIndex)
        }

        private fun nextStat(offset: Int = 0): Int {
            currentIndex += offset
            val startIndex = html[currentIndex].indexOf(">") + 1
            var endIndex = html[currentIndex].indexOf("<", startIndex)
            if (endIndex < 0) endIndex = html[currentIndex].length
            val stat = html[currentIndex].substring(startIndex, endIndex).toInt()
            currentIndex++
            return stat
        }

        private fun hasNextRow(): Boolean {
            val originalIndex = currentIndex
            for (i in currentIndex until html.size) {
                currentIndex = i
                if (html[i].contains(ROW_START)) {
                    currentIndex = originalIndex
                    nextTable()
                    val result = currentIndex > i
                    currentIndex = originalIndex
                    return result
                }
            }
            currentIndex = originalIndex
            return false
        }

        private fun isAtTableEnd(): Boolean {
            for (i in currentIndex until html.size) {
                if (html[i].contains(DATA_START)) return false
                else if (html[i].contains(TABLE_END)) return true
            }
            return false
        }
    }
}
