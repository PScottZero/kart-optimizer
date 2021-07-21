import React, { Component } from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  label: String;
  value: number;
}

export default class ProgressBar extends Component<ProgressBarProps> {
  render() {
    let separators = [];
    for (var i = 0; i < 23; i++) {
      separators.push(
        <div
          key={i}
          className="VerticalSeparator"
          style={{ height: (i + 1) % 4 === 0 ? "1rem" : "0.5rem" }}
        ></div>
      );
    }
    return (
      <div className="ProgressBar">
        <p>
          {this.props.label}: {+(this.barWidth() / (100 / 6)).toFixed(2)}
        </p>
        <div className="Bar">
          <div
            className="Progress"
            style={{ width: `${100 - this.barWidth()}%` }}
          ></div>
          <div className="SeparatorContainer">{separators}</div>
        </div>
      </div>
    );
  }

  barWidth(): number {
    return this.props.value * (100 / 24) + 12.5;
  }
}
