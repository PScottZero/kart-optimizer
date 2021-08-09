package kart.optimizer.util

import kart.optimizer.model.Kart
import kart.optimizer.model.StatNames
import kotlin.math.absoluteValue

class KartComparator(
    val priorityStats: List<StatNames>,
    val regularStats: List<StatNames>
): Comparator<Kart> {
    private val compare = CompareFunctions()

    override fun compare(kart1: Kart?, kart2: Kart?): Int {
        val kart1PriorityStatsAreLargest = compare.priorityStatsAreLargest(kart1!!)
        val kart2PriorityStatsAreLargest = compare.priorityStatsAreLargest(kart2!!)
        return if (!kart1PriorityStatsAreLargest && kart2PriorityStatsAreLargest) {
            1
        } else if (kart1PriorityStatsAreLargest && !kart2PriorityStatsAreLargest) {
            -1
        } else {
            compare.compareSumOfPriorityStats(kart1, kart2)
        }
    }

    inner class CompareFunctions {
        private val helper = HelperFunctions()

        fun priorityStatsAreLargest(kart: Kart): Boolean {
            val priorityStatValues = kart.stats.getStats(priorityStats)
            val priorityStatIndices = kart.stats.getStatIndices(priorityStats)
            kart.stats.toList().forEachIndexed { index, value ->
                if (!priorityStatIndices.contains(index) && !helper.lessThanAll(value, priorityStatValues)) return false
            }
            return true
        }

        fun compareSumOfPriorityStats(kart1: Kart, kart2: Kart): Int {
            val kart1SumOfPriorityStats = helper.sumOfPriorityStats(kart1)
            val kart2SumOfPriorityStats = helper.sumOfPriorityStats(kart2)
            return if (kart1SumOfPriorityStats < kart2SumOfPriorityStats) {
                1
            } else if (kart1SumOfPriorityStats > kart2SumOfPriorityStats) {
                -1
            } else {
                compareSumOfAbsDiffsFromMean(kart1, kart2)
            }
        }

       private fun compareSumOfAbsDiffsFromMean(kart1: Kart, kart2: Kart): Int {
            val kart1SumOfAbsDiffsFromMean = helper.sumOfAbsDiffsFromMean(kart1)
            val kart2SumOfAbsDiffsFromMean = helper.sumOfAbsDiffsFromMean(kart2)
            return if (kart1SumOfAbsDiffsFromMean < kart2SumOfAbsDiffsFromMean) {
                -1
            } else if (kart1SumOfAbsDiffsFromMean > kart2SumOfAbsDiffsFromMean) {
                1
            } else {
                comparePriorityStats(kart1, kart2)
            }
        }

        private fun comparePriorityStats(kart1: Kart, kart2: Kart, index: Int = 0): Int {
            if (index < priorityStats.size) {
                val kart1Stat = kart1.stats.getStat(priorityStats[index])
                val kart2Stat = kart2.stats.getStat(priorityStats[index])
                return if (kart1Stat < kart2Stat) {
                    1
                } else if (kart1Stat > kart2Stat) {
                    -1
                } else {
                    comparePriorityStats(kart1, kart2, index + 1)
                }
            }
            return compareRegularStats(kart1, kart2)
        }

        private fun compareRegularStats(kart1: Kart, kart2: Kart, index: Int = 0): Int {
            if (index < regularStats.size) {
                val kart1Stat = kart1.stats.getStat(regularStats[index])
                val kart2Stat = kart2.stats.getStat(regularStats[index])
                return if (kart1Stat < kart2Stat) {
                    1
                } else if (kart1Stat > kart2Stat) {
                    -1
                } else {
                    compareRegularStats(kart1, kart2, index + 1)
                }
            }
            return 0
        }
    }

    inner class HelperFunctions {
        fun lessThanAll(value: Int, all: List<Int>): Boolean {
            all.forEach {
                if (value >= it) return false
            }
            return true
        }

        fun sumOfPriorityStats(kart: Kart): Int {
            return kart.stats.getStats(priorityStats).reduce { sum, value -> sum + value }
        }

        fun sumOfAbsDiffsFromMean(kart: Kart): Int {
            val mean = kart.stats.toList().reduce { sum, value -> sum + value } / 5
            var sum = 0
            kart.stats.toList().forEach {
                sum += (it - mean).absoluteValue
            }
            return sum
        }
    }
}