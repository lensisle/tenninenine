import * as ActionTypes from "./../actions/actionTypes";

const world = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.SET_PLAYER_ROOM:
      return {
        ...state,
        currentRoom: action.room,
        position: action.position,
        previousPosition: action.previousPosition
      };
    case ActionTypes.BACK_PREVIOUS_POSITION:
      return {
        ...state,
        currentRoom: action.room,
        position: action.position,
        previousPosition: action.previousPosition
      };
    case ActionTypes.SET_TO_GAMEPLAY_WORLD:
      return {
        ...state,
        rooms: action.world,
        currentRoom: action.currentRoom,
        position: action.position,
        previousPosition: action.previousPosition
      };
    default: return state;
  }
};

export default world;