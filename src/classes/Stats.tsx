export enum SpeedHandlingTerrain {
  GROUND = 'Ground',
  WATER = 'Water',
  ANTI_GRAVITY = 'Anti-Gravity',
  AIR = 'Air',
}

export enum TractionTerrain {
  ON_ROAD = 'On-Road',
  OFF_ROAD = 'Off-Road',
}

export class Stats {
  constructor(
    readonly weight: number = 0,
    readonly acceleration: number = 0,
    readonly onRoadTraction: number = 0,
    readonly offRoadTraction: number = 0,
    readonly miniTurbo: number = 0,
    readonly groundSpeed: number = 0,
    readonly waterSpeed: number = 0,
    readonly antiGravitySpeed: number = 0,
    readonly airSpeed: number = 0,
    readonly groundHandling: number = 0,
    readonly waterHandling: number = 0,
    readonly antiGravityHandling: number = 0,
    readonly airHandling: number = 0
  ) {}
}
