import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles/main.scss";
import Reducers from "./reducers/index";
import App from "./components/app";

import { createInitialWorld } from "./game/world";

const initialWorld = createInitialWorld();

const world = {
  rooms: initialWorld,
  currentRoom: initialWorld[0][0],
  position: {
    x: 0,
    y: 0
  },
  previousPosition: { 
    x: 0, 
    y: 0 
  }
};

// for now we will keep this as an object in case we add more data to scene state
const scene = {
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
  scene,
  player
};

const store = createStore(Reducers, initialGameState);

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById("root"));

