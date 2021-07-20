import React, { Component } from "react";
import { IKartContext, KartContext, setKartParts } from "../../providers/KartProvider";
import { PartContext } from "../../providers/PartProvider";
import { Part, PartType } from "../PartTile/Part";
import PartTile from "../PartTile/PartTile";
import "./PartList.scss";

interface PartListProps {
  partList: Part[];
  type: PartType;
  callbackFunc: Function;
}

export const PartList: React.FC<PartListProps> = props => {
  const context = React.useContext(KartContext)

  var parts = new Array(props.partList.length)
      .fill(0)
      .map((_, index) => {
        return (
          <PartTile
            key={index}
            part={props.partList[index]}
            onClick={() =>
              setKartParts(context, props.partList[index], props.type)
            }
          ></PartTile>
        );
      });

  return <div className="PartList">{parts}</div>;
}

export default PartList;
