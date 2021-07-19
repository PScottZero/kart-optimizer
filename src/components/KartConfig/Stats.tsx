export enum SpeedHandlingTerrain {
  GROUND = "Ground", 
  WATER = "Water", 
  ANTI_GRAVITY = "Anti-Gravity", 
  AIR = "Air"
}

export enum TractionTerrain {
  ON_ROAD = "On-Road",
  OFF_ROAD = "Off-Road",
}

export class Stats {
  constructor(
    readonly weight: number,
    readonly acceleration: number,
    readonly onRoadTraction: number,
    readonly offRoadTraction: number,
    readonly miniTurbo: number,
    readonly groundSpeed: number,
    readonly waterSpeed: number,
    readonly antiGravitySpeed: number,
    readonly airSpeed: number,
    readonly groundHandling: number,
    readonly waterHandling: number,
    readonly antiGravityHandling: number,
    readonly airHandling: number
  ) {}
}
