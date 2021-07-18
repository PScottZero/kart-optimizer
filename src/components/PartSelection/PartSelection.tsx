import React, { Component } from 'react'
import './PartSelection.scss'
import * as drivers from './json/drivers.json'
import * as bodies from './json/bodies.json'
import * as tires from './json/tires.json'
import * as gliders from './json/gliders.json'
import { Part, PartType } from './Part';
import PartList from '../PartList/PartList'

export default class PartSelection extends Component<{
  type: PartType
}, {
  selectedPart: Part,
  showPartList: Boolean
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPart: this.initPart(this.props.type),
      showPartList: false
    };
  }

  render() {
    return (
      <div className="PartSelection" onClick={this.togglePartList}>
        <div>
          <img src={this.state.selectedPart.img} alt="Part" />
        </div>
        {
          this.state.showPartList && <PartList partList={}></PartList>
        }
      </div>
    )
  }

  togglePartList = () => this.setState({ showPartList: !this.state.showPartList });

  private initPart(type: PartType): any {
    switch (type) {
      case PartType.DRIVER: return drivers[0]
      case PartType.BODY: return bodies[0]
      case PartType.TIRE: return tires[0]
      case PartType.GLIDER: return gliders[0]
    }
  }
}
