import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles/main.scss";
import Reducers from "./reducers/index";
import App from "./components/app";

import { createWorld } from "./game/world";

const world = createWorld(20, 20);

const playerRoom = {
  room: world[1][1],
  position: {
    x: 1,
    y: 1
  },
  showSceneDescription: false
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

