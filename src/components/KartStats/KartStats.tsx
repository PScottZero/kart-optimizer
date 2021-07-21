import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import { sumOfStats } from '../../util/Common';
import ProgressBar from '../ProgressBar/ProgressBar';
import './KartStats.scss';

export const KartStats: React.FC = () => {
  const context = React.useContext(PartContext);
  const stats = sumOfStats([
    context.selectedDriver,
    context.selectedBody,
    context.selectedTire,
    context.selectedGlider,
  ]);

  return (
    <div className="PartStats">
      <div className="StatsContainer">
        <ProgressBar label="Speed" value={stats[0]}></ProgressBar>
        <ProgressBar label="Acceleration" value={stats[1]}></ProgressBar>
        <ProgressBar label="Weight" value={stats[2]}></ProgressBar>
        <ProgressBar label="Handling" value={stats[3]}></ProgressBar>
        <ProgressBar label="Traction" value={stats[4]}></ProgressBar>
      </div>
    </div>
  );
};
