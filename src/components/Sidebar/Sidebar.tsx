import React, { Component } from 'react';
import { KartStats } from '../KartStats/KartStats';
import Optimizer from '../Optimizer/Optimizer';
import './Sidebar.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <KartStats></KartStats>
        <Optimizer></Optimizer>
      </div>
    );
  }
}
