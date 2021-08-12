import { Part } from './Part';
import { Stats } from './Stats';

export class Kart {
  constructor(
    readonly driver: Part,
    readonly body: Part,
    readonly tire: Part,
    readonly glider: Part,
    readonly stats: Stats
  ) {}
}