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

  speed(terrain: SpeedHandlingTerrain) {
    switch (terrain) {
      case SpeedHandlingTerrain.GROUND: return this.groundSpeed;
      case SpeedHandlingTerrain.WATER: return this.waterSpeed;
      case SpeedHandlingTerrain.ANTI_GRAVITY: return this.antiGravitySpeed;
      case SpeedHandlingTerrain.AIR: return this.airHandling;
    }
  }

  handling(terrain: SpeedHandlingTerrain): number {
    switch (terrain) {
      case SpeedHandlingTerrain.GROUND: return this.groundHandling;
      case SpeedHandlingTerrain.WATER: return this.waterHandling;
      case SpeedHandlingTerrain.ANTI_GRAVITY: return this.antiGravityHandling;
      case SpeedHandlingTerrain.AIR: return this.airHandling;
    }
  }

  traction(terrain: TractionTerrain): number {
    switch (terrain) {
      case TractionTerrain.ON_ROAD: return this.onRoadTraction;
      case TractionTerrain.OFF_ROAD: return this.offRoadTraction;
    }
  }
}

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
