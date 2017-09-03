const defaultState = {
  spec: { },
  level: 1,
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_CHARACTER_SPEC':
    return {
      ...state,
      spec: action.payload,
    };
  default: return state;
  }
}
