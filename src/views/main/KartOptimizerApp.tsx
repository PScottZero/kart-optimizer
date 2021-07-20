import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import KartConfig from '../../components/KartConfig/KartConfig'
import KartStats from '../../components/KartStats/KartStats'
import { Part, PartType } from '../../components/PartTile/Part'
import './KartOptimizerApp.scss'
import drivers from "../../components/KartConfig/json/drivers.json";
import bodies from "../../components/KartConfig/json/bodies.json";
import tires from "../../components/KartConfig/json/tires.json";
import gliders from "../../components/KartConfig/json/gliders.json";

interface KartOptimizerAppState {
  selectedDriver: Part,
  selectedBody: Part,
  selectedTire: Part,
  selectedGlider: Part
}

export default class KartOptimizerApp extends Component<{}, KartOptimizerAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDriver: drivers[0],
      selectedBody: bodies[0],
      selectedTire: tires[0],
      selectedGlider: gliders[0],
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="KartOptimizerApp">
        <Header></Header>
        <KartConfig callbackFunc={this.selectPart}></KartConfig>
        <KartStats
          selectedDriver={this.state.selectedDriver}
          selectedBody={this.state.selectedBody}
          selectedTire={this.state.selectedTire}
          selectedGlider={this.state.selectedGlider}
        ></KartStats>
      </div>
    )
  }

  selectPart = (part: Part, type: PartType) => {
    switch (type) {
      case PartType.DRIVER: this.setState({selectedDriver: part}); break;
      case PartType.BODY: this.setState({selectedBody: part}); break;
      case PartType.TIRE: this.setState({selectedTire: part}); break;
      case PartType.GLIDER: this.setState({selectedGlider: part}); break;
    }
  }
}
