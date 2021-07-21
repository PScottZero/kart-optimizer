import React, { Component, MouseEventHandler } from 'react';
import { Part } from '../../classes/Part';
import './PartSelection.scss';

interface PartSelectionProps {
  selectedPart: Part;
  isSelected: boolean;
  onClick: MouseEventHandler;
}

export default class PartSelection extends Component<PartSelectionProps> {
  render() {
    return (
      <div className="PartSelection" onClick={this.props.onClick}>
        <div className="SelectedPart" style={{ background: this.color() }}>
          <img
            className="PartImage"
            src={this.props.selectedPart.img}
            alt={this.props.selectedPart.name}
          ></img>
        </div>
        <p className="PartLabel">{this.partName()}</p>
      </div>
    );
  }

  color(): string {
    return this.props.isSelected ? '#26baff' : '#777';
  }

  partName(): string {
    let split = this.props.selectedPart.name.split(' ');
    if (split[split.length - 1].includes('(')) split.pop();
    if (split.length >= 2) return `${split[0]} ${split[1]}`;
    return split.join(' ');
  }
}
