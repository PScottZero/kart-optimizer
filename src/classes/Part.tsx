import { StatNames } from '../providers/StatPriorityProvider';
import { Stats } from './Stats';

export class Part {
  constructor(
    readonly name: string = '',
    readonly img: string = '',
    readonly stats: Stats = new Stats()
  ) {}

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

export enum PartType {
  DRIVER = 'Driver',
  BODY = 'Body',
  TIRE = 'Tire',
  GLIDER = 'Glider',
}
