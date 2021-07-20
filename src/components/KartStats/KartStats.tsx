import React, { Component } from 'react'
import { KartContext } from '../../providers/KartProvider'
import { Part } from '../PartTile/Part'
import ProgressBar from '../ProgressBar/ProgressBar'
import './KartStats.scss'

export const KartStats: React.FC = () => {
  const context = React.useContext(KartContext)
  
  const speed = (): number => {
    return context.selectedDriver.stats.groundSpeed +
      context.selectedBody.stats.groundSpeed +
      context.selectedTire.stats.groundSpeed +
      context.selectedGlider.stats.groundSpeed
  }

  const acceleration = (): number => {
    return context.selectedDriver.stats.acceleration +
      context.selectedBody.stats.acceleration +
      context.selectedTire.stats.acceleration +
      context.selectedGlider.stats.acceleration
  }

  const weight = (): number => {
    return context.selectedDriver.stats.weight +
      context.selectedBody.stats.weight +
      context.selectedTire.stats.weight +
      context.selectedGlider.stats.weight
  }

  const handling = (): number => {
    return context.selectedDriver.stats.groundHandling +
      context.selectedBody.stats.groundHandling +
      context.selectedTire.stats.groundHandling +
      context.selectedGlider.stats.groundHandling
  }

  const traction = (): number => {
    return context.selectedDriver.stats.offRoadTraction +
      context.selectedBody.stats.offRoadTraction +
      context.selectedTire.stats.offRoadTraction +
      context.selectedGlider.stats.offRoadTraction
  }

  return (
    <div className="PartStats">
      <div className="StatsContainer">
        <ProgressBar label="Speed" value={speed()}></ProgressBar>
        <ProgressBar label="Acceleration" value={acceleration()}></ProgressBar>
        <ProgressBar label="Weight" value={weight()}></ProgressBar>
        <ProgressBar label="Handling" value={handling()}></ProgressBar>
        <ProgressBar label="Traction" value={traction()}></ProgressBar>
      </div>
    </div>
  )
}
