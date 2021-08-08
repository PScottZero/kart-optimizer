import React, { useState } from 'react';

import './KartConfig.scss';
import PartSelection from '../PartSelection/PartSelection';
import { Part, PartType } from '../../classes/Part';
import { PartContext } from '../../providers/PartProvider';
import PartTile from '../PartTile/PartTile';

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

  const partListType = (partList: Part[]): PartType => {
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
    return partListType(partList) === partListType(state.selectedPartList);
  };

  const partIsSelected = (part: Part) => {
    return (
      part.name === partData.selectedDriver.name ||
      part.name === partData.selectedBody.name ||
      part.name === partData.selectedTire.name ||
      part.name === partData.selectedGlider.name
    );
  };

  return (
    <div className="KartConfig">
      <div className="CenterContainer">
        <div className="PartOptions">
          <PartSelection
            selectedPart={partData.selectedDriver}
            selectedPartType={partListType(partData.drivers)}
            isSelected={isSelectedCategory(partData.drivers)}
            isFixed={partData.driverIsFixed}
            onClick={() => show(partData.drivers)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedBody}
            selectedPartType={partListType(partData.bodies)}
            isSelected={isSelectedCategory(partData.bodies)}
            isFixed={partData.bodyIsFixed}
            onClick={() => show(partData.bodies)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedTire}
            selectedPartType={partListType(partData.tires)}
            isSelected={isSelectedCategory(partData.tires)}
            isFixed={partData.tireIsFixed}
            onClick={() => show(partData.tires)}
          ></PartSelection>
          <PartSelection
            selectedPart={partData.selectedGlider}
            selectedPartType={partListType(partData.gliders)}
            isSelected={isSelectedCategory(partData.gliders)}
            isFixed={partData.gliderIsFixed}
            onClick={() => show(partData.gliders)}
          ></PartSelection>
        </div>
        <div className="Separator"></div>
        {partList().length !== 0 ? (
          <div className="PartList">
            {new Array(partList().length).fill(0).map((_, index) => {
              return (
                <PartTile
                  key={index}
                  part={partList()[index]}
                  type={partListType(partList())}
                  isSelected={partIsSelected(partList()[index])}
                ></PartTile>
              );
            })}
          </div>
        ) : (
          <p className="NoBackend">Loading List...</p>
        )}
      </div>
    </div>
  );
};
