import React from 'react';
import { Part, PartType } from '../../classes/Part';
import { PartContext } from '../../providers/PartProvider';
import PartTile from '../PartTile/PartTile';
import './PartList.scss';

interface PartListProps {
  partList: Part[];
  type: PartType;
}

const PartList: React.FC<PartListProps> = (props) => {
  const partData = React.useContext(PartContext);

  const isSelected = (part: Part) => {
    return (
      part.name === partData.selectedDriver.name ||
      part.name === partData.selectedBody.name ||
      part.name === partData.selectedTire.name ||
      part.name === partData.selectedGlider.name
    );
  };

  return (
    <div className="PartList">
      {new Array(props.partList.length).fill(0).map((_, index) => {
        return (
          <PartTile
            key={index}
            part={props.partList[index]}
            type={props.type}
            isSelected={isSelected(props.partList[index])}
          ></PartTile>
        );
      })}
    </div>
  );
};

export default PartList;
