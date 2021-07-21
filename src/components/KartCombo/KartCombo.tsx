import React, { Component } from 'react'
import { Part } from '../../classes/Part'
import './KartCombo.scss'

interface KartComboProps {
  parts: Part[]
}

export default class KartCombo extends Component<KartComboProps> {
  stats(): number[] {
    return [
      this.props.parts.map((part) => part.stats.groundSpeed).reduce((sum, current) => sum + current),
      this.props.parts.map((part) => part.stats.acceleration).reduce((sum, current) => sum + current),
      this.props.parts.map((part) => part.stats.weight).reduce((sum, current) => sum + current),
      this.props.parts.map((part) => part.stats.groundHandling).reduce((sum, current) => sum + current),
      this.props.parts.map((part) => part.stats.onRoadTraction).reduce((sum, current) => sum + current)
    ]
  }
  
  render() {
    const parts = []
    for (var part of this.props.parts) {
      parts.push(
        <div className="KartComboPart">
          <img src={part.img} alt="Part"></img>
        </div>
      )
    }

    return (
      <div className="KartCombo">
        {parts}
      </div>
    )
  }
}
