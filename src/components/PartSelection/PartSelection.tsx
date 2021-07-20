import React, { Component, MouseEventHandler } from "react";
import { Part } from "../PartTile/Part";
import "./PartSelection.scss";

interface PartSelectionProps {
  selectedPart: Part;
  onClick: MouseEventHandler;
}

export default class PartSelection extends Component<PartSelectionProps> {
  render() {
    return (
      <div className="PartSelection" onClick={this.props.onClick}>
        <div className="SelectedPart">
          <img
            className="PartImage"
            src={this.props.selectedPart.img}
            alt={this.props.selectedPart.name}
          ></img>
        </div>
        <p className="PartLabel">{this.partName()}</p>
      </div>
    );
  }

  partName() {
    let split = this.props.selectedPart.name.split(" ");
    if (split[split.length - 1].includes("(")) split.pop();
    if (split.length >= 2) return `${split[0]} ${split[1]}`;
    return split.join(" ");
  }
}
