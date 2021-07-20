import React, { Component } from "react";
import { Kart } from "../Optimizer/Kart";
import PartTile from "../PartTile/PartTile";
import "./KartCombo.scss";
import { Part } from "../PartTile/Part";

interface KartComboProps {
  kart: Kart;
}

export default class KartCombo extends Component<KartComboProps> {
  render() {
    var partTiles = this.partsForKart().map((part: Part) => (
      <PartTile part={part} onClick={() => {}}></PartTile>
    ));
    return <div className="KartCombo">{partTiles}</div>;
  }

  partsForKart(): Part[] {
    return [
      this.context.drivers.find(
        (driver: Part) => driver.name === this.props.kart.driver
      ),
      this.context.bodies.find(
        (body: Part) => body.name === this.props.kart.body
      ),
      this.context.tires.find(
        (tire: Part) => tire.name === this.props.kart.tire
      ),
      this.context.gliders.find(
        (glider: Part) => glider.name === this.props.kart.glider
      ),
    ];
  }
}
