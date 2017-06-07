import { TOGGLE_ROOM_DESCRIPTION } from "./../actions/actionTypes";

const playerRoom = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_ROOM_DESCRIPTION:
      return {
        ...state,
        showSceneDescription: action.showSceneDescription
      };
    default: return state;
  }
};

export default playerRoom;