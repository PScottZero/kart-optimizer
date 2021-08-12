import { StatNames } from '../providers/StatPriorityProvider';
import { Part } from './Part';

export class TopKartsRequest {
  constructor(
    readonly fixedDriver: Part | null,
    readonly fixedBody: Part | null,
    readonly fixedTire: Part | null,
    readonly fixedGlider: Part | null,
    readonly priorityStats: StatNames[],
    readonly regularStats: StatNames[],
    readonly maxCount: number
  ) {}
}
