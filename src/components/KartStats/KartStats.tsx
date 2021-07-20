import React from "react";
import { PartContext, PartData } from "../../providers/PartProvider";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./KartStats.scss";

export const KartStats: React.FC = () => {
  const speed = (data: PartData): number => {
    return (
      data.selectedDriver.stats.groundSpeed +
      data.selectedBody.stats.groundSpeed +
      data.selectedTire.stats.groundSpeed +
      data.selectedGlider.stats.groundSpeed
    );
  };

  const acceleration = (data: PartData): number => {
    return (
      data.selectedDriver.stats.acceleration +
      data.selectedBody.stats.acceleration +
      data.selectedTire.stats.acceleration +
      data.selectedGlider.stats.acceleration
    );
  };

  const weight = (data: PartData): number => {
    return (
      data.selectedDriver.stats.weight +
      data.selectedBody.stats.weight +
      data.selectedTire.stats.weight +
      data.selectedGlider.stats.weight
    );
  };

  const handling = (data: PartData): number => {
    return (
      data.selectedDriver.stats.groundHandling +
      data.selectedBody.stats.groundHandling +
      data.selectedTire.stats.groundHandling +
      data.selectedGlider.stats.groundHandling
    );
  };

  const traction = (data: PartData): number => {
    return (
      data.selectedDriver.stats.offRoadTraction +
      data.selectedBody.stats.offRoadTraction +
      data.selectedTire.stats.offRoadTraction +
      data.selectedGlider.stats.offRoadTraction
    );
  };

  return (
    <PartContext.Consumer>
      {(context) => (
        <div className="PartStats">
          <div className="StatsContainer">
            <ProgressBar label="Speed" value={speed(context)}></ProgressBar>
            <ProgressBar
              label="Acceleration"
              value={acceleration(context)}
            ></ProgressBar>
            <ProgressBar label="Weight" value={weight(context)}></ProgressBar>
            <ProgressBar
              label="Handling"
              value={handling(context)}
            ></ProgressBar>
            <ProgressBar
              label="Traction"
              value={traction(context)}
            ></ProgressBar>
          </div>
        </div>
      )}
    </PartContext.Consumer>
  );
};
