import { SET_PLAYER_ROOM } from "./../actions/actionTypes";

const playerRoom = (state = {}, action) => {
  switch(action.type) {
    case SET_PLAYER_ROOM: 
      return {
        room: action.room,
        position: {
          x: action.newPosX,
          y: action.newPosY
        }
      };
    default: return state;
  }
};

export default playerRoom;