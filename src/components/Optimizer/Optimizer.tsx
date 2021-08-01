import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import KartCombo from '../KartCombo/KartCombo';
import './Optimizer.scss';
import StatPriority from '../StatPriority/StatPriority';

const Optimizer: React.FC = () => {
  const partContext = React.useContext(PartContext);

  return (
    <div className="Optimizer">
      <StatPriority></StatPriority>
      <div className="Options">
        {partContext.topKarts.map((kart, index) => (
          <KartCombo key={`kart-${index}`} kart={kart}></KartCombo>
        ))}
      </div>
    </div>
  );
};

export default Optimizer;
