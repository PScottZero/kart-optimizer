import { StatNames } from '../providers/StatPriorityProvider';
import { sumOfStats } from '../util/Common';
import { Part } from './Part';
import { ReducedStats, Stats } from './Stats';

export class KartDto {
  constructor(
    readonly driver: string[],
    readonly body: string[],
    readonly tire: string[],
    readonly glider: string[],
    readonly stats: Stats
  ) {}
}

export class Kart {
  public driver: Part[];
  public body: Part[];
  public tire: Part[];
  public glider: Part[];
  public stats: Stats;

  constructor(kart: KartDto, drivers: Part[], bodies: Part[], tires: Part[], gliders: Part[]) {
    this.driver = this.getParts(kart.driver, drivers)
    this.body = this.getParts(kart.body, bodies)
    this.tire = this.getParts(kart.tire, tires)
    this.glider = this.getParts(kart.glider, gliders)
    const sum = sumOfStats([this.driver[0], this.body[0], this.tire[0], this.glider[0]])
    this.stats = ReducedStats(sum[0], sum[1], sum[2], sum[3], sum[4])
  }

  private getParts(names: string[], partList: Part[]): Part[] {
    return names.map(name => partList.filter(part => part.name === name)[0])
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
