import React, { Component } from 'react'
import { PartType } from '../PartSelection/Part'
import PartSelection from '../PartSelection/PartSelection'
import './KartConfig.scss'

export default class KartConfig extends Component {
  render() {
    return (
      <div className="KartConfig">
        <PartSelection type={PartType.DRIVER}></PartSelection>
        <PartSelection type={PartType.BODY}></PartSelection>
        <PartSelection type={PartType.TIRE}></PartSelection>
        <PartSelection type={PartType.GLIDER}></PartSelection>
      </div>
    )
  }
}

