import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./KartOptimizerApp.scss";
import { KartConfig } from "../../components/KartConfig/KartConfig";
import { KartStats } from "../../components/KartStats/KartStats";

export default class KartOptimizerApp extends Component {
  render() {
    return (
      <div className="KartOptimizerApp">
        <Header></Header>
        <KartConfig></KartConfig>
        <KartStats></KartStats>
        {/* <Optimizer></Optimizer> */}
      </div>
    );
  }
}
