import "./styles/main.scss";

import React from "react";
import ReactDOM from "react-dom";

// components

import Screen from "./components/Screen";
import Dialogue from "./components/Dialogue";
import Controls from "./components/Controls";
import Map from "./components/Map";
import PlayerInfo from "./components/PlayerInfo";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <PlayerInfo />
        <Dialogue />
        <div className="wrapper--columns">
          <Screen />
          <Map />
        </div>
        <Controls />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));