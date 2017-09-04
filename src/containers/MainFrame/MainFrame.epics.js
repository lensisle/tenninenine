import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { SET_CURRENT_VIEW, onSetCurrentViewSuccess } from './MainFrame.actions';

export const setViewEpic = action$ =>
  action$
    .ofType(SET_CURRENT_VIEW)
    .delay(3000)
    .mergeMap(({ payload }) => Observable.of(onSetCurrentViewSuccess(payload)));
