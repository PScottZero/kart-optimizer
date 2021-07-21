import React, { useState } from 'react';

import './KartConfig.scss';
import PartSelection from '../PartSelection/PartSelection';
import { Part, PartType } from '../../classes/Part';
import PartList from '../PartList/PartList';
import { PartContext } from '../../providers/PartProvider';

interface KartConfigState {
  selectedPartList: Part[];
}

export const KartConfig: React.FC = () => {
  const partData = React.useContext(PartContext);
  const [state, setState] = useState<KartConfigState>({
    selectedPartList: React.useContext(PartContext).drivers,
  });

  const show = (partList: Part[]) => {
    setState({
      selectedPartList: partList,
    });
  };

  const type = (partList: Part[]): PartType => {
    if (partList.length > 0) {
      switch (partList[0].name) {
        case 'Standard Kart':
          return PartType.BODY;
        case 'Standard':
          return PartType.TIRE;
        case 'Super Glider':
          return PartType.GLIDER;
        default:
          return PartType.DRIVER;
      }
    }
    return PartType.DRIVER;
  };

  const partList = (): Part[] => {
    return state.selectedPartList.length === 0
      ? partData.drivers
      : state.selectedPartList;
  };

  const isSelectedCategory = (partList: Part[]): boolean => {
    return type(partList) === type(state.selectedPartList);
  };

  return (
    <div className="KartConfig">
      <div className="CenterContainer">
        <div className="PartOptions">
          <PartSelection
            selectedPart={partData.selectedDriver}
            isSelected={isSelectedCategory(partData.drivers)}
            onClick={() => show(partData.drivers)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedBody}
            isSelected={isSelectedCategory(partData.bodies)}
            onClick={() => show(partData.bodies)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedTire}
            isSelected={isSelectedCategory(partData.tires)}
            onClick={() => show(partData.tires)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedGlider}
            isSelected={isSelectedCategory(partData.gliders)}
            onClick={() => show(partData.gliders)}
          ></PartSelection>
        </div>
        <div className="Separator"></div>
        <PartList partList={partList()} type={type(partList())}></PartList>
      </div>
    </div>
  );
};
