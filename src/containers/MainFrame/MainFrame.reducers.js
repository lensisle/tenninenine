const defaultState = {
  currentView: 'TitleScreen',
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_VIEW_TITLE_SCREEN':
    return {
      ...state,
      currentView: 'TitleScreen',
    };
  default:
    return state;
  }
}
