import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { Part, PartType } from '../../components/PartTile/Part'
import './KartOptimizerApp.scss'
import { IKartContext, KartContext, setKartParts } from '../../providers/KartProvider'
import { KartConfig } from '../../components/KartConfig/KartConfig'
import { KartStats } from '../../components/KartStats/KartStats'

export default class KartOptimizerApp extends Component {
  render() {
    return (
      <KartContext.Consumer>
        {kartContext => (
          <div className="KartOptimizerApp">
            <Header></Header>
            <KartConfig></KartConfig>
            <KartStats></KartStats>
            {/* <Optimizer></Optimizer> */}
          </div>
        )}
      </KartContext.Consumer>
    )
  }
}
