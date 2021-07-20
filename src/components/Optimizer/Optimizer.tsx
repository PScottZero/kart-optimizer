import React, { Component } from "react";
import "./Optimizer.scss";
import karts from "../../json/karts.json";
import { Kart } from "./Kart";
import KartCombo from "../KartCombo/KartCombo";

export default class Optimizer extends Component {
  render() {
    var kartCombinations = [];
    for (var kart of karts as Kart[]) {
      kartCombinations.push(<KartCombo kart={kart}></KartCombo>);
      if (kartCombinations.length > 20) break;
    }
    return <div className="Optimizer">{kartCombinations}</div>;
  }
}
