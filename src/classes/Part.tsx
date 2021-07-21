import { Stats } from './Stats';

export class Part {
  constructor(
    readonly name: string = '',
    readonly img: string = '',
    readonly stats: Stats = new Stats()
  ) {}
}

export enum PartType {
  DRIVER = 'Driver',
  BODY = 'Body',
  TIRE = 'Tire',
  GLIDER = 'Glider',
}
