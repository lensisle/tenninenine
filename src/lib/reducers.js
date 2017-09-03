import { combineReducers } from 'redux';

import MainFrameState from '../containers/MainFrame/MainFrame.reducers';
import SelectionScreenState from '../containers/SelectionScreen/SelectionScreen.reducers';

import PlayerState from '../redux/player/Player.reducers';

const rootReducer = combineReducers({
  MainFrameState,
  PlayerState,
  SelectionScreenState,
});

export default rootReducer;
