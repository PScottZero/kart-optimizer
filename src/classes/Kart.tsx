import { StatNames } from '../providers/StatPriorityProvider';
import { sumOfStats } from '../util/Common';
import { Part } from './Part';
import { ReducedStats, Stats } from './Stats';

export class Kart {
  public stats: Stats;

  constructor(
    readonly driver: Part,
    readonly body: Part,
    readonly tire: Part,
    readonly glider: Part
  ) {
    const sum = sumOfStats([driver, body, tire, glider]);
    this.stats = ReducedStats(sum[0], sum[1], sum[2], sum[3], sum[4]);
  }

  getStat(stat: StatNames): number {
    switch (stat) {
      case StatNames.SPEED:
        return this.stats.groundSpeed;
      case StatNames.ACCELERATION:
        return this.stats.acceleration;
      case StatNames.WEIGHT:
        return this.stats.weight;
      case StatNames.HANDLING:
        return this.stats.groundHandling;
      case StatNames.TRACTION:
        return this.stats.offRoadTraction;
      default:
        return 0;
    }
  }

  getStats(stats: StatNames[]): number[] {
    return stats.map((stat) => this.getStat(stat));
  }
}
