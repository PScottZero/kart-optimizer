import React from 'react';
import { PartContext } from '../../providers/PartProvider';
import { sumOfStats } from '../../util/Common';
import Optimizer from '../Optimizer/Optimizer';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const partData = React.useContext(PartContext);

  const kartStats = sumOfStats([
    partData.selectedDriver,
    partData.selectedBody,
    partData.selectedTire,
    partData.selectedGlider,
  ]);

  return (
    <div className="Sidebar">
      <div className="KartStats">
        <ProgressBar label="Speed" value={kartStats[0]}></ProgressBar>
        <ProgressBar label="Acceleration" value={kartStats[1]}></ProgressBar>
        <ProgressBar label="Weight" value={kartStats[2]}></ProgressBar>
        <ProgressBar label="Handling" value={kartStats[3]}></ProgressBar>
        <ProgressBar label="Traction" value={kartStats[4]}></ProgressBar>
      </div>
      <Optimizer></Optimizer>
    </div>
  );
};

export default Sidebar;
