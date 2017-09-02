import { combineReducers } from 'redux';

import MainFrameState from '../containers/MainFrame/MainFrame.reducers';

const rootReducer = combineReducers({
  MainFrameState,
});

export default rootReducer;
