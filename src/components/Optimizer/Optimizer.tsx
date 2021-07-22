import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import KartCombo from '../KartCombo/KartCombo';
import './Optimizer.scss';
import StatPriority from '../StatPriority/StatPriority';
import { Part } from '../../classes/Part';
// import { StatPriorityContext } from '../../providers/StatPriorityProvider';

const Optimizer: React.FC = () => {
  const partContext = React.useContext(PartContext);
  // const statPriorityContext = React.useContext(StatPriorityContext);

  const dummyKarts: Part[][] = [];

  for (var i = 0; i < 10; i++) {
    dummyKarts.push([
      partContext.drivers[i],
      partContext.bodies[i],
      partContext.tires[i],
      partContext.gliders[i],
    ]);
  }

  return (
    <div className="Optimizer">
      <div className="Config">
        <StatPriority></StatPriority>
        <button>Generate Karts</button>
      </div>
      <div className="Options">
        {dummyKarts.map((value) => (
          <KartCombo parts={value}></KartCombo>
        ))}
      </div>
    </div>
  );
};

export default Optimizer;
