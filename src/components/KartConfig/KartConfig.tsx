import React, { Component } from "react";

import drivers from "../../json/drivers.json";
import bodies from "../../json/bodies.json";
import tires from "../../json/tires.json";
import gliders from "../../json/gliders.json";
import "./KartConfig.scss";
import PartList from "../PartList/PartList";
import PartSelection from "../PartSelection/PartSelection";
import { Part, PartType } from "../PartTile/Part";

interface KartConfigProps {
  callbackFunc: Function
}

interface KartConfigState {
  selectedPartList: Part[];
  selectedDriver: Part;
  selectedBody: Part;
  selectedTire: Part;
  selectedGlider: Part;
}

export default class KartConfig extends Component<KartConfigProps, KartConfigState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPartList: drivers,
      selectedDriver: drivers[0],
      selectedBody: bodies[0],
      selectedTire: tires[0],
      selectedGlider: gliders[0],
    };
  }

  render() {
    return (
      <div className="KartConfig">
        <div className="CenterContainer">
          <div className="PartOptions">
            <PartSelection
              selectedPart={this.state.selectedDriver}
              onClick={() => this.show(drivers)}
            ></PartSelection>
            <PartSelection
              selectedPart={this.state.selectedBody}
              onClick={() => this.show(bodies)}
            ></PartSelection>
            <PartSelection
              selectedPart={this.state.selectedTire}
              onClick={() => this.show(tires)}
            ></PartSelection>
            <PartSelection
              selectedPart={this.state.selectedGlider}
              onClick={() => this.show(gliders)}
            ></PartSelection>
          </div>
          <div className="Separator"></div>
          <PartList
            partList={this.state.selectedPartList}
            type={this.type()}
            callbackFunc={this.selectPart}
          ></PartList>
        </div>
      </div>
    );
  }

  show(partList: Part[]) {
    this.setState({
      selectedPartList: partList,
    });
  }

  type(): PartType {
    switch (this.state.selectedPartList) {
      case drivers:
        return PartType.DRIVER;
      case bodies:
        return PartType.BODY;
      case tires:
        return PartType.TIRE;
      case gliders:
        return PartType.GLIDER;
      default:
        return PartType.DRIVER;
    }
  }

  selectPart = (part: Part, type: PartType) => {
    switch (type) {
      case PartType.DRIVER: this.setState({ selectedDriver: part }); break;
      case PartType.BODY: this.setState({ selectedBody: part }); break;
      case PartType.TIRE: this.setState({ selectedTire: part }); break;
      case PartType.GLIDER: this.setState({ selectedGlider: part }); break;
    }
    this.props.callbackFunc(part, type)
  };
}
