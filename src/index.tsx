import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import KartConfig from "./components/KartConfig/KartConfig";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="Grid">
      <Header></Header>
      <KartConfig></KartConfig>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
