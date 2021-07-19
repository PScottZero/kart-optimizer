import React, { Component, MouseEventHandler } from 'react'
import { Part } from './Part'
import './PartTile.scss'

export default class PartTile extends Component<{
  part: Part,
}> {
  render() {
    return (
      <div className="PartTile">
        <img className="PartImage" src={this.props.part.img} alt="Part"/>
      </div>
    )
  }
}
