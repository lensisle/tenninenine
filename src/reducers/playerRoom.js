import { SET_PLAYER_ROOM, TOGGLE_SCENE_DESCRIPTION } from "./../actions/actionTypes";

const playerRoom = (state = {}, action) => {
  switch(action.type) {
    case SET_PLAYER_ROOM: 
      return {
        ...state,
        room: action.room,
        position: {
          x: action.newPosX,
          y: action.newPosY
        }
      };
    case TOGGLE_SCENE_DESCRIPTION:
      return {
        ...state,
        showSceneDescription: action.showSceneDescription
      };
    default: return state;
  }
};

export default playerRoom;