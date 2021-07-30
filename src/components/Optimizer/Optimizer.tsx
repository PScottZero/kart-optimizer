import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import KartCombo from '../KartCombo/KartCombo';
import './Optimizer.scss';
import StatPriority from '../StatPriority/StatPriority';
import {
  StatNames,
  StatPriorityContext,
} from '../../providers/StatPriorityProvider';
import { Kart } from '../../classes/Kart';
import { Part } from '../../classes/Part';

const Optimizer: React.FC = () => {
  const partContext = React.useContext(PartContext);
  const statPriorityContext = React.useContext(StatPriorityContext);

  const absDiff = (part: Part | Kart, priority: StatNames[]): number => {
    let mean =
      part.getStats(priority).reduce((sum, value) => (sum += value)) /
      priority.length;
    return part
      .getStats(priority)
      .map((value) => Math.abs(value - mean))
      .reduce((sum, value) => (sum += value));
  };

  const sumOfPriorityStats = (
    part: Part | Kart,
    priority: StatNames[]
  ): number => {
    return priority
      .map((stat) => part.getStat(stat))
      .reduce((sum, value) => (sum += value));
  };

  const compareRegularStats = (
    part1: Part | Kart,
    part2: Part | Kart,
    regular: StatNames[],
    index: number = 0
  ): number => {
    if (index < regular.length) {
      const kart1Stat = part1.getStat(regular[index]);
      const kart2Stat = part2.getStat(regular[index]);
      if (kart1Stat < kart2Stat) {
        return 1;
      } else if (kart1Stat > kart2Stat) {
        return -1;
      } else {
        return compareRegularStats(part1, part2, regular, index + 1);
      }
    } else return 0;
  };

  const comparePriorityStats = (
    part1: Part | Kart,
    part2: Part | Kart,
    priority: StatNames[],
    regular: StatNames[],
    index: number = 0
  ): number => {
    if (index < regular.length) {
      const kart1Stat = part1.getStat(priority[index]);
      const kart2Stat = part2.getStat(priority[index]);
      if (kart1Stat < kart2Stat) {
        return 1;
      } else if (kart1Stat > kart2Stat) {
        return -1;
      } else {
        return comparePriorityStats(part1, part2, priority, regular, index + 1);
      }
    } else return compareRegularStats(part1, part2, regular);
  };

  const compareAbsDiff = (
    part1: Part | Kart,
    part2: Part | Kart,
    priority: StatNames[],
    regular: StatNames[]
  ): number => {
    const kart1AbsDiff = absDiff(part1, priority);
    const kart2AbsDiff = absDiff(part2, priority);
    if (kart1AbsDiff < kart2AbsDiff) {
      return -1;
    } else if (kart1AbsDiff > kart2AbsDiff) {
      return 1;
    } else {
      return comparePriorityStats(part1, part2, priority, regular);
    }
  };

  const compareStats = (
    value1: Part | Kart,
    value2: Part | Kart,
    priority: StatNames[],
    regular: StatNames[]
  ): number => {
    if (priority.length !== 0) {
      const part1StatSum = sumOfPriorityStats(value1, priority);
      const part2StatSum = sumOfPriorityStats(value2, priority);
      if (part1StatSum < part2StatSum) {
        return 1;
      } else if (part1StatSum > part2StatSum) {
        return -1;
      } else {
        return compareAbsDiff(value1, value2, priority, regular);
      }
    } else {
      return compareRegularStats(value1, value2, regular);
    }
  };

  const topParts = (
    partList: Part[],
    priority: StatNames[],
    regular: StatNames[],
    count: number
  ): Part[] => {
    return partList
      .slice()
      .sort((part1, part2) => compareStats(part1, part2, priority, regular))
      .slice(0, count);
  };

  const topPartCount = (): number => {
    var count = 3;
    count += partContext.selectedDriverIsFixed ? 1 : 0; // 4
    count += partContext.selectedBodyIsFixed ? 4 : 0; // 8
    count += partContext.selectedTireIsFixed ? 56 : 0; // 64
    return count;
  };

  const topKarts = (prioritySplit: number): Kart[] => {
    const priority = statPriorityContext.statPriority.slice(0, prioritySplit);
    const regular = statPriorityContext.statPriority.slice(prioritySplit + 1);
    const count = topPartCount();
    const topDrivers = partContext.selectedDriverIsFixed
      ? [partContext.selectedDriver]
      : topParts(partContext.drivers, priority, regular, count);
    const topBodies = partContext.selectedBodyIsFixed
      ? [partContext.selectedBody]
      : topParts(partContext.bodies, priority, regular, count);
    const topTires = partContext.selectedTireIsFixed
      ? [partContext.selectedTire]
      : topParts(partContext.tires, priority, regular, count);
    const topGliders = partContext.selectedGliderIsFixed
      ? [partContext.selectedGlider]
      : topParts(partContext.gliders, priority, regular, count);

    const karts: Kart[] = [];
    topDrivers.forEach((driver) => {
      topBodies.forEach((body) => {
        topTires.forEach((tire) => {
          topGliders.forEach((glider) => {
            karts.push(new Kart(driver, body, tire, glider));
          });
        });
      });
    });
    karts.sort((kart1, kart2) => compareStats(kart1, kart2, priority, regular));

    return karts;
  };

  return (
    <div className="Optimizer">
      <StatPriority></StatPriority>
      <div className="Options">
        {topKarts(
          statPriorityContext.statPriority.indexOf(StatNames.PRIORITY)
        ).map((kart, index) => (
          <KartCombo key={`kart-${index}`} kart={kart}></KartCombo>
        ))}
      </div>
    </div>
  );
};

export default Optimizer;
