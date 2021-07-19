import React, { Component, MouseEventHandler } from 'react'
import { Part } from '../PartTile/Part';
import './PartSelection.scss'

export default class PartSelection extends Component<{
  initialPart: Part,
  onClick: MouseEventHandler
}, {
  selectedPart: Part
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPart: this.props.initialPart
    };
  }

  render() {
    return (
      <div className="PartSelection" onClick={this.props.onClick}>
        <img className="PartImage" src={this.state.selectedPart.img} alt={this.state.selectedPart.name}></img>
      </div>
    )
  }
}
