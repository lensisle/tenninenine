import { CREATE_PLAYER, DAMAGE_PLAYER, HEAL_PLAYER } from "./../actions/actionTypes";

const player = (state = {}, action) => {
  switch(action.type) {
    case CREATE_PLAYER:
      return {
        name: action.name,
        hp: action.hp,
        items: []
      };
    case DAMAGE_PLAYER:
      return {
        ...state,
        hp: state.hp - action.damage
      };
    case HEAL_PLAYER:
      return {
        ...state,
        hp: state.hp + action.heal
      };
    default: return state;
  }
};

export default player;