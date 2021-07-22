import React, { Component } from 'react';
import Header from './components/Header/Header';
import './KartOptimizerApp.scss';
import { KartConfig } from './components/KartConfig/KartConfig';
import PartProvider from './providers/PartProvider';
import StatPriorityProvider from './providers/StatPriorityProvider';
import Sidebar from './components/Sidebar/Sidebar';

export default class KartOptimizerApp extends Component {
  render() {
    return (
      <StatPriorityProvider>
        <PartProvider>
          <div className="KartOptimizerApp">
            <Header></Header>
            <KartConfig></KartConfig>
            <Sidebar></Sidebar>
          </div>
        </PartProvider>
      </StatPriorityProvider>
    );
  }
}
