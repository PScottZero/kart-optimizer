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
        {partContext.topKartsLoaded ? (
          partContext.topKarts.length === 0 ? (
            <p className="LoadingKarts">Click "Generate Karts"</p>
          ) : (
            partContext.topKarts.map((kart, index) => (
              <KartCombo key={`kart-${index}`} kart={kart}></KartCombo>
            ))
          )
        ) : (
          <p className="LoadingKarts">Loading Karts...</p>
        )}
      </div>
    </div>
  );
};

export default Optimizer;
