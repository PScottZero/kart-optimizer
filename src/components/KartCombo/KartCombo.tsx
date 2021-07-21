import React, { Component } from "react";
import { Kart } from "../Optimizer/Kart";
import PartTile from "../PartTile/PartTile";
import "./KartCombo.scss";
import { Part } from "../../classes/Part";
import { PartContext, PartData } from "../../providers/PartProvider";

interface KartComboProps {
  kart: Kart;
}

const KartCombo: React.FC<KartComboProps> = (props) => {
  const partData = React.useContext(PartContext);

  const partsForKart = (): Part[] => {
    return [
      partData.drivers.find(
        (driver: Part) => driver.name === props.kart.driver
      )!!,
      partData.bodies.find((body: Part) => body.name === props.kart.body)!!,
      partData.tires.find((tire: Part) => tire.name === props.kart.tire)!!,
      partData.gliders.find(
        (glider: Part) => glider.name === props.kart.glider
      )!!,
    ];
  };

  return (
    <div className="KartCombo">
      {partsForKart().map((part: Part) => (
        <PartTile part={part}></PartTile>
      ))}
    </div>
  );
};

export default KartCombo;
