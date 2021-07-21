import React from "react";
import { PartContext } from "../../providers/PartProvider";
import { Part, PartType } from "../../classes/Part";
import "./PartTile.scss";

interface PartTileProps {
  part: Part;
  type?: PartType;
  isSelected?: boolean;
}

const PartTile: React.FC<PartTileProps> = (props) => {
  const partData = React.useContext(PartContext);

  const color = (): string => {
    return props.isSelected ? "#26baff" : "#555";
  };

  return (
    <div
      className="PartTile"
      onClick={() => {
        if (props.type) partData.setPart(props.part, props.type);
      }}
      style={{ background: color() }}
    >
      <img className="PartImage" src={props.part.img} alt="Part" />
    </div>
  );
};

export default PartTile;
