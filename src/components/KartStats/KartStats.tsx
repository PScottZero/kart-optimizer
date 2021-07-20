import React, { Component } from 'react'
import { Part } from '../PartTile/Part'
import ProgressBar from '../ProgressBar/ProgressBar'
import './KartStats.scss'

interface KartStatsProps {
  selectedDriver: Part,
  selectedBody: Part,
  selectedTire: Part,
  selectedGlider: Part,
}

export default class KartStats extends Component<KartStatsProps> {
  render() {
    return (
      <div className="PartStats">
        <div className="StatsContainer">
          <ProgressBar label="Speed" value={this.speed()}></ProgressBar>
          <ProgressBar label="Acceleration" value={this.acceleration()}></ProgressBar>
          <ProgressBar label="Weight" value={this.weight()}></ProgressBar>
          <ProgressBar label="Handling" value={this.handling()}></ProgressBar>
          <ProgressBar label="Traction" value={this.traction()}></ProgressBar>
        </div>
      </div>
    )
  }

  speed(): number {
    return this.props.selectedDriver.stats.groundSpeed +
      this.props.selectedBody.stats.groundSpeed +
      this.props.selectedTire.stats.groundSpeed +
      this.props.selectedGlider.stats.groundSpeed
  }

  acceleration(): number {
    return this.props.selectedDriver.stats.acceleration +
      this.props.selectedBody.stats.acceleration +
      this.props.selectedTire.stats.acceleration +
      this.props.selectedGlider.stats.acceleration
  }

  weight(): number {
    return this.props.selectedDriver.stats.weight +
      this.props.selectedBody.stats.weight +
      this.props.selectedTire.stats.weight +
      this.props.selectedGlider.stats.weight
  }

  handling(): number {
    return this.props.selectedDriver.stats.groundHandling +
      this.props.selectedBody.stats.groundHandling +
      this.props.selectedTire.stats.groundHandling +
      this.props.selectedGlider.stats.groundHandling
  }

  traction(): number {
    return this.props.selectedDriver.stats.offRoadTraction +
      this.props.selectedBody.stats.offRoadTraction +
      this.props.selectedTire.stats.offRoadTraction +
      this.props.selectedGlider.stats.offRoadTraction
  }
}
