import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import KartCombo from '../KartCombo/KartCombo';
import './Optimizer.scss';
import StatPriority from '../StatPriority/StatPriority';
import { Part } from '../../classes/Part';
import { StatPriorityContext } from '../../providers/StatPriorityProvider';
import { Kart } from '../../classes/Kart';
import { sumOfStats } from '../../util/Common';
import { ReducedStats } from '../../classes/Stats';

const Optimizer: React.FC = () => {
  const partContext = React.useContext(PartContext);
  const statPriorityContext = React.useContext(StatPriorityContext);

  const dummyKarts: Part[][] = [];

  for (var i = 0; i < 10; i++) {
    dummyKarts.push([
      partContext.drivers[i],
      partContext.bodies[i],
      partContext.tires[i],
      partContext.gliders[i],
    ]);
  }

  const getStatOfPriority = (index: number, part: Part | Kart): number => {
    const statName = statPriorityContext.statPriority[index];
    switch (statName) {
      case 'Speed':
        return part.stats.groundSpeed;
      case 'Acceleration':
        return part.stats.acceleration;
      case 'Weight':
        return part.stats.weight;
      case 'Handling':
        return part.stats.groundHandling;
      case 'Traction':
        return part.stats.offRoadTraction;
      default:
        return 0;
    }
  };

  const compareStats = (
    a: Part | Kart,
    b: Part | Kart,
    priority: number = 0
  ): number => {
    if (getStatOfPriority(priority, a) > getStatOfPriority(priority, b))
      return -1;
    if (getStatOfPriority(priority, a) === getStatOfPriority(priority, b)) {
      if (priority < 4) {
        return compareStats(a, b, priority + 1);
      } else return 0;
    }
    return 1;
  };

  const topParts = (partList: Part[], count: number): Part[] => {
    return partList
      .slice()
      .sort((a, b) => compareStats(a, b))
      .slice(0, count);
  };

  const kartCombos = (): Kart[] => {
    var bestDrivers = topParts(partContext.drivers, 3);
    var bestBodies = topParts(partContext.bodies, 3);
    var bestTires = topParts(partContext.tires, 3);
    var bestGliders = topParts(partContext.gliders, 3);

    var kartCombos: Kart[] = [];
    bestDrivers.forEach((driver) => {
      bestBodies.forEach((body) => {
        bestTires.forEach((tire) => {
          bestGliders.forEach((glider) => {
            const stats = sumOfStats([driver, body, tire, glider]);
            const kartStats = ReducedStats(
              stats[0],
              stats[1],
              stats[2],
              stats[3],
              stats[4]
            );
            kartCombos.push(new Kart(driver, body, tire, glider, kartStats));
          });
        });
      });
    });
    return kartCombos.sort((a, b) => compareStats(a, b));
  };

  return (
    <div className="Optimizer">
      <div className="Config">
        <StatPriority></StatPriority>
      </div>
      <div className="Options">
        {kartCombos().map((kart, index) => (
          <KartCombo key={`kart-${index}`} kart={kart}></KartCombo>
        ))}
      </div>
    </div>
  );
};

export default Optimizer;
