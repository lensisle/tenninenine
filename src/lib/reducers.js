import { combineReducers } from 'redux';

import MainFrameState from '../containers/MainFrame/MainFrame.reducers';
import PlayerState from '../redux/player/Player.reducers';

const rootReducer = combineReducers({
  MainFrameState,
  PlayerState,
});

export default rootReducer;
