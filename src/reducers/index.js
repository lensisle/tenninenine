import { combineReducers } from "redux";

import player from "./player";
import world from "./world";
import playerRoom from "./playerRoom";

const Reducers = combineReducers({
  player,
  world,
  playerRoom
});

export default Reducers;