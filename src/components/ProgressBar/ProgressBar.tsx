import React from 'react';
import { statColor } from '../../util/Common';
import './ProgressBar.scss';

interface ProgressBarProps {
  label: String;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  let separators = [];
  for (var i = 0; i < 23; i++) {
    separators.push(
      <div
        key={i}
        className="VerticalSeparator"
        style={{ height: (i + 1) % 4 === 0 ? '1rem' : '0.5rem' }}
      ></div>
    );
  }

  return (
    <div className="ProgressBar">
      <p>
        {props.label}:{' '}
        <span style={{ color: statColor(props.value) }}>
          {+props.value.toFixed(2)}
        </span>
      </p>
      <div className="Bar">
        <div
          className="Progress"
          style={{ width: `${100 - props.value * (100 / 6)}%` }}
        ></div>
        <div className="SeparatorContainer">{separators}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
