export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';
export const SET_CURRENT_VIEW_SUCCESS = 'SET_CURRENT_VIEW_SUCCESS';
export const SET_CURRENT_VIEW_FAILED = 'SET_CURRENT_VIEW_FAILED';

export const onSetCurrentView = payload => ({
  type: SET_CURRENT_VIEW,
  payload,
});

export const onSetCurrentViewSuccess = payload => ({
  type: SET_CURRENT_VIEW_SUCCESS,
  payload,
});

export const onSetCurrentViewFailed = payload => ({
  type: SET_CURRENT_VIEW_FAILED,
  payload,
});
