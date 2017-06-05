import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles/main.scss";
import Reducers from "./reducers/index";
import App from "./components/app";

import { createWorld } from "./game/world";

const world = createWorld(10, 10);
const playerRoom = {
  room: world[0][0],
  position: {
    x: 0,
    y: 0
  }
};

// TODO: set this player dynamically through a form

const player = {
  name: "You",
  hp: 100,
  items: []
};

const initialGameState = { 
  world,
  playerRoom,
  player
};

const store = createStore(Reducers, initialGameState);

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById("root"));

