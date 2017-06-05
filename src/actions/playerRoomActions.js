import { SET_PLAYER_ROOM } from "./actionTypes";

export const setPlayerRoom = (world, currentPosition, direction) => {

  // TODO: calculate world boundaries
  const newPosX = 0;
  const newPosY = 0;
  const room = {};

  return {
    type: SET_PLAYER_ROOM,
    room,
    newPosX,
    newPosY
  }
};