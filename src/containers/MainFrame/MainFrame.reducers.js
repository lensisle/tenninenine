const defaultState = {
  currentView: 'TitleScreen',
  loading: false,
  error: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_CURRENT_VIEW':
    return {
      ...state,
      loading: true,
    };
  case 'SET_CURRENT_VIEW_SUCCESS':
    return {
      ...state,
      currentView: action.payload,
      loading: false,
      error: false,
    };
  case 'SET_CURRENT_VIEW_FAILED':
    return {
      ...state,
      loading: false,
      error: true,
    };
  default:
    return state;
  }
}
