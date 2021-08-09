import React from 'react';
import { Kart } from '../../classes/Kart';
import { PartContext } from '../../providers/PartProvider';
import { statColor, sumOfStats } from '../../util/Common';
import './KartCombo.scss';

interface KartComboProps {
  kart: Kart;
}

const KartCombo: React.FC<KartComboProps> = (props) => {
  const context = React.useContext(PartContext);
  const statLabels = ['S', 'A', 'W', 'H', 'T'];
  const statValues =
    props.kart.driver !== undefined
      ? sumOfStats([
          props.kart.driver[0],
          props.kart.body[0],
          props.kart.tire[0],
          props.kart.glider[0],
        ])
      : [];

  return (
    <div className="KartCombo" onClick={() => context.setKart(props.kart)}>
      <div className="Parts">
        <div className="KartComboPart">
          <img src={props.kart.driver[0].img} alt="Driver"></img>
        </div>
        <div className="KartComboPart">
          <img src={props.kart.body[0].img} alt="Body"></img>
        </div>
        <div className="KartComboPart">
          <img src={props.kart.tire[0].img} alt="Tire"></img>
        </div>
        <div className="KartComboPart">
          <img src={props.kart.glider[0].img} alt="Glider"></img>
        </div>
      </div>
      <div className="Stats">
        {statLabels.map((value, index) => (
          <p key={`kart-combo-${index}`}>
            {value}:{' '}
            <span style={{ color: statColor(statValues[index]) }}>
              {statValues[index]}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default KartCombo;
