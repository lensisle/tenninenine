import { combineEpics } from 'redux-observable';

import {
  setViewEpic,
} from '../containers/MainFrame/MainFrame.epics';

const epics = [setViewEpic];

const rootEpic = combineEpics.apply(null, epics);

export default rootEpic;
