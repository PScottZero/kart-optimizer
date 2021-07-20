import React from "react";
import { PartContext } from "../../providers/PartProvider";
import { Part, PartType } from "../PartTile/Part";
import PartTile from "../PartTile/PartTile";
import "./PartList.scss";

interface PartListProps {
  partList: Part[];
  type: PartType;
}

export const PartList: React.FC<PartListProps> = props => {
  return (
    <PartContext.Consumer>
      {context => (
        <div className="PartList">{new Array(props.partList.length)
          .fill(0)
          .map((_, index) => {
            return (
              <PartTile
                key={index}
                part={props.partList[index]}
                onClick={() =>
                  context.setPart(props.partList[index], props.type)
                }
              ></PartTile>
            );
          })
          }</div>
      )}
    </PartContext.Consumer>
  );
}

export default PartList;
