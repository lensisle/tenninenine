const defaultState = {
  currentView: 'TitleScreen',
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_CURRENT_VIEW':
    return {
      ...state,
      currentView: action.payload,
    };
  default:
    return state;
  }
}
