const defaultState = {
  selectedIndex: 0,
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_SELECTED_INDEX':
    return {
      ...state,
      selectedIndex: action.payload,
    };
  default: return state;
  }
}

