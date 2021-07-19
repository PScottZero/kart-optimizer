import React, { Component, MouseEventHandler } from "react";
import { Part } from "./Part";
import "./PartTile.scss";

export default class PartTile extends Component<{
  part: Part;
  onClick: MouseEventHandler;
}> {
  render() {
    return (
      <div className="PartTile" onClick={this.props.onClick}>
        <img className="PartImage" src={this.props.part.img} alt="Part" />
      </div>
    );
  }
}
