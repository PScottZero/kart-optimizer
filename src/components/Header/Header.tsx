import React, { Component } from 'react'
import './Header.scss'
import mk8 from '../../assets/images/MarioKart8.webp'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img className="LogoImg" src={mk8} alt="Mario Kart 8 Logo"></img>
          <p className="LogoText">Kart Optimizer</p>
        </div>
      </div>
    )
  }
}
