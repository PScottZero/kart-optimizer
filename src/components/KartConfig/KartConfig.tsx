import React, { useState } from "react";

import "./KartConfig.scss";
import PartSelection from "../PartSelection/PartSelection";
import { Part, PartType } from "../PartTile/Part";
import PartList from "../PartList/PartList";
import { PartContext } from "../../providers/PartProvider";

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
      {context => (<div className="KartConfig">
              <div className="CenterContainer">
                <div className="PartOptions">
                  <PartSelection
                    selectedPart={context.selectedDriver}
                    onClick={() => show(context.drivers)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={context.selectedBody}
                    onClick={() => show(context.bodies)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={context.selectedTire}
                    onClick={() => show(context.tires)}
                  ></PartSelection>
                  <PartSelection
                    selectedPart={context.selectedGlider}
                    onClick={() => show(context.gliders)}
                  ></PartSelection>
                </div>
                <div className="Separator"></div>
                <PartList
                  partList={state.selectedPartList}
                  type={type()}
                ></PartList>
              </div>
            </div>
          )}
    </PartContext.Consumer>
  );
}
