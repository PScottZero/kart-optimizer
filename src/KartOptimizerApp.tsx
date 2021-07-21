import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./KartOptimizerApp.scss";
import { KartConfig } from "./components/KartConfig/KartConfig";
import { KartStats } from "./components/KartStats/KartStats";
import PartProvider from "./providers/PartProvider";
import Optimizer from "./components/Optimizer/Optimizer";

export default class KartOptimizerApp extends Component {
  render() {
    return (
      <PartProvider>
        <div className="KartOptimizerApp">
          <Header></Header>
          <KartConfig></KartConfig>
          <KartStats></KartStats>
          <Optimizer></Optimizer>
        </div>
      </PartProvider>
    );
  }
}
