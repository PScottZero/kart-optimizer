import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import KartConfig from './components/KartConfig/KartConfig';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <KartConfig></KartConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
