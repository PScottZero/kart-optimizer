import React, { Component } from 'react'
import { Part, PartType } from '../PartSelection/Part'
import PartTile from '../PartTile/PartTile'
import './PartList.scss'

export default class PartList extends Component<{
  partList: Part[]
}> {
  render() {
    var parts = []
    for (var part of this.props.partList) {
      parts.push(<PartTile part={part}></PartTile>)
    }
    return (
      <div className="PartList">
        {parts}
      </div>
    )
  }
}
