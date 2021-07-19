import React, { Component, MouseEventHandler } from "react";
import { Part } from "../PartTile/Part";
import "./PartSelection.scss";

export default class PartSelection extends Component<{
  selectedPart: Part;
  onClick: MouseEventHandler;
}> {
  render() {
    return (
      <div className="PartSelection" onClick={this.props.onClick}>
        <img
          className="PartImage"
          src={this.props.selectedPart.img}
          alt={this.props.selectedPart.name}
        ></img>
      </div>
    );
  }
}
