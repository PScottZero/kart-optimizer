import React, { Component } from 'react'

import drivers from './json/drivers.json'
import bodies from './json/bodies.json'
import tires from './json/tires.json'
import gliders from './json/gliders.json'
import './KartConfig.scss'
import PartList from '../PartList/PartList'
import PartSelection from '../PartSelection/PartSelection'
import { Part } from '../PartTile/Part'

export default class KartConfig extends Component<{}, {
  selectedPartList: Part[]
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPartList: drivers
    }
  }

  render() {
    return (
      <div className="KartConfig">
        <div className="CenterContainer">
          <div className="PartOptions">
            <PartSelection initialPart={drivers[0]} onClick={() => this.show(drivers)}></PartSelection>
            <PartSelection initialPart={bodies[0]} onClick={() => this.show(bodies)}></PartSelection>
            <PartSelection initialPart={tires[0]} onClick={() => this.show(tires)}></PartSelection>
            <PartSelection initialPart={gliders[0]} onClick={() => this.show(gliders)}></PartSelection>
          </div>
          <div className="Separator"></div>
          <PartList partList={this.state.selectedPartList}></PartList>
        </div>
      </div>
    )
  }

  show(partList: Part[]) {
    this.setState({
      selectedPartList: partList
    });
  }
}
