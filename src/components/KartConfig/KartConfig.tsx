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
        {
          partList().length !== 0
            ? <PartList
                partList={partList()}
                type={partListType(partList())}
              ></PartList>
            : <p className="NoBackend">
                Backend is not running.<br/>
                Please download the <a href="https://drive.google.com/file/d/1B-_u6OXax6jnumH9PEm9Pit_3ZycWg5m/view?usp=sharing">backend</a><br/>
                then open a terminal in the same location as the downloaded .jar file
                and run the command: <span>java -jar ./kart-optimizer-backend.jar</span>
              </p>
        }
      </div>
    </div>
  );
};
