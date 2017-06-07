import { combineReducers } from "redux";

import player from "./player";
import world from "./world";
import scene from "./scene";

const Reducers = combineReducers({
  player,
  world,
  scene
});

export default Reducers;