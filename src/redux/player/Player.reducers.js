const defaultState = {
  characterClass: 'none',
  level: 1,
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case 'SET_CHARACTER_CLASS':
    return {
      ...state,
      characterClass: action.payload,
    };
  default: return state;
  }
}
