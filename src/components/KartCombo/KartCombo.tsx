import React from 'react';
import { Part } from '../../classes/Part';
import { PartContext } from '../../providers/PartProvider';
import { statColor, sumOfStats } from '../../util/Common';
import './KartCombo.scss';

interface KartComboProps {
  parts: Part[];
}

const KartCombo: React.FC<KartComboProps> = (props) => {
  const context = React.useContext(PartContext);
  const parts: JSX.Element[] = [];
  for (var part of props.parts) {
    parts.push(
      <div className="KartComboPart">
        <img src={part.img} alt="Part"></img>
      </div>
    );
  }

  const stats: JSX.Element[] = [];
  const statLabels = ['S', 'A', 'W', 'H', 'T'];
  const statValues = sumOfStats(props.parts);
  statLabels.forEach((value, index) =>
    stats.push(
      <p>
        {value}:{' '}
        <span style={{ color: statColor(statValues[index]) }}>
          {statValues[index]}
        </span>
      </p>
    )
  );

  return (
    <div className="KartCombo" onClick={() => context.setKart(props.parts)}>
      <div className="Parts">{parts}</div>
      <div className="Stats">{stats}</div>
    </div>
  );
};

export default KartCombo;
