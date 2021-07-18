import React, { Component } from 'react'
import './PartSelection.scss'
import * as drivers from './json/drivers.json'
import * as bodies from './json/bodies.json'
import * as tires from './json/tires.json'
import * as gliders from './json/gliders.json'
import { Part, PartType } from './Part';

type PartSelectionProps = {
  type: PartType
}

type PartSelectionState = {
  selectedPart: Part
}

export default class PartSelection extends Component<PartSelectionProps, PartSelectionState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPart: this.initPart(this.props.type)
    };
  }
  
  render() {
    return (
      <div className="PartSelection">
        <div>
          <img src={this.state.selectedPart.img}/>
        </div>
      </div>
    )
  }

  private initPart(type: PartType): any {
    switch (type) {
      case PartType.DRIVER: return drivers[0]
      case PartType.BODY: return bodies[0]
      case PartType.TIRE: return tires[0]
      case PartType.GLIDER: return gliders[0]
    }
  }
}
