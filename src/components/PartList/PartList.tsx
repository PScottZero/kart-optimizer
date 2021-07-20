import React, { Component } from "react";
import { Part, PartType } from "../PartTile/Part";
import PartTile from "../PartTile/PartTile";
import "./PartList.scss";

export default class PartList extends Component<{
  partList: Part[];
  type: PartType;
  callbackFunc: Function;
}> {
  render() {
    var parts = new Array(this.props.partList.length)
      .fill(0)
      .map((_, index) => {
        return (
          <PartTile
            key={index}
            part={this.props.partList[index]}
            onClick={() =>
              this.props.callbackFunc(
                this.props.partList[index],
                this.props.type
              )
            }
          ></PartTile>
        );
      });
    return <div className="PartList">{parts}</div>;
  }
}
