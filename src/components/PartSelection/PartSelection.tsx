import React, { MouseEventHandler } from 'react';
import { Part, PartType } from '../../classes/Part';
import { PartContext } from '../../providers/PartProvider';
import './PartSelection.scss';

interface PartSelectionProps {
  selectedPart: Part;
  selectedPartType: PartType;
  isSelected: boolean;
  isFixed: boolean;
  onClick: MouseEventHandler;
}

const PartSelection: React.FC<PartSelectionProps> = (props) => {
  const partContext = React.useContext(PartContext);

  const backgroundColor = (): string => {
    return props.isSelected && props.selectedPart !== undefined
      ? '#26baff'
      : '#777';
  };

  const lockButtonColor = (): string => {
    return isFixed() ? '#f92470' : '#26baff';
  };

  const partName = (): string => {
    let split = props.selectedPart.name.split(' ');
    if (split[split.length - 1].includes('(')) split.pop();
    if (split.length >= 2) return `${split[0]} ${split[1]}`;
    return split.join(' ');
  };

  const isFixed = () => {
    switch (props.selectedPartType) {
      case PartType.DRIVER:
        return partContext.driverIsFixed;
      case PartType.BODY:
        return partContext.bodyIsFixed;
      case PartType.TIRE:
        return partContext.tireIsFixed;
      case PartType.GLIDER:
        return partContext.gliderIsFixed;
    }
  };

  const toggleFixed = (type: PartType) => partContext.toggleFixed(type);

  return (
    <div className="PartSelection">
      <div
        className="SelectedPart"
        style={{ background: backgroundColor() }}
        onClick={props.onClick}
      >
        <img
          className="PartImage"
          src={props.selectedPart !== undefined ? props.selectedPart.img : ''}
          alt={props.selectedPart !== undefined ? props.selectedPart.name : ''}
        ></img>
      </div>
      <div
        className="PartLock"
        style={{ background: lockButtonColor() }}
        onClick={() =>
          props.selectedPart !== undefined
            ? toggleFixed(props.selectedPartType)
            : {}
        }
      >
        <p className="PartLabel">
          {props.selectedPart !== undefined ? partName() : 'None'}
        </p>
      </div>
    </div>
  );
};

export default PartSelection;
