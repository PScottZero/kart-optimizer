import React, { Component, useState } from "react";

import "./KartConfig.scss";
import PartSelection from "../PartSelection/PartSelection";
import { Part, PartType } from "../PartTile/Part";
import { PartContext } from "../../providers/PartProvider";
import { KartContext } from "../../providers/KartProvider";

interface KartConfigState {
  selectedPartList: Part[];
}

export const KartConfig: React.FC = () => {
  const [state, setState] = useState<KartConfigState>({
    selectedPartList: React.useContext(PartContext).drivers
  })
  
  const show = (partList: Part[]) => {
    setState({
      selectedPartList: partList,
    });
  }

  const type = (): PartType => {
    switch (state.selectedPartList[0].name) {
      case "Standard Kart": return PartType.BODY;
      case "Standard": return PartType.TIRE;
      case "Super Glider": return PartType.GLIDER;
      default: return PartType.DRIVER
    }
  }
  
  return (
    <PartContext.Consumer>
      {partContext => (
        <KartContext.Consumer>
          {kartContext => (
            <div className="KartConfig">
              <div className="CenterContainer">
                <div className="PartOptions">
                  <PartSelection
                    selectedPart={kartContext.selectedDriver}
                    onClick={() => show(partContext.drivers)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={kartContext.selectedBody}
                    onClick={() => show(partContext.bodies)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={kartContext.selectedTire}
                    onClick={() => show(partContext.tires)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={kartContext.selectedGlider}
                    onClick={() => show(partContext.gliders)}
                  ></PartSelection>
                </div>
                <div className="Separator"></div>
                {/* <PartList
                  partList={state.selectedPartList}
                  type={type()}
                ></PartList> */}
              </div>
            </div>
          )}
        </KartContext.Consumer>
      )}
    </PartContext.Consumer>
  );
}
