import { SET_PLAYER_ROOM, TOGGLE_SCENE_DESCRIPTION, BACK_PREVIOUS_POSITION } from "./../actions/actionTypes";

const playerRoom = (state = {}, action) => {
  switch(action.type) {
    case SET_PLAYER_ROOM: 
      return {
        ...state,
        room: action.room,
        position: action.position,
        previousPosition: action.previousPosition
      };
    case TOGGLE_SCENE_DESCRIPTION:
      return {
        ...state,
        showSceneDescription: action.showSceneDescription
      };
    case BACK_PREVIOUS_POSITION:
      return {
        ...state,
        room: action.room,
        position: action.position,
        previousPosition: action.previousPosition
      };
    default: return state;
  }
};

export default playerRoom;