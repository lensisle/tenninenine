import { SET_PLAYER_ROOM } from "./actionTypes";

export const setPlayerRoom = (world, currentPosition, direction) => {
  const worldSize = {
    width: world.length,
    height: world[0].length
  };

  let newPosX = currentPosition.x;
  let newPosY = currentPosition.y;

  if(direction.x > 0 && currentPosition.x < worldSize.width - 1) {
    newPosX += direction.x;
  } else if(direction.x < 0 && currentPosition.x > 0) {
    newPosX += direction.x;
  } else if(direction.y > 0 && currentPosition.y < worldSize.height - 1) {
    newPosY += direction.y;
  } else if(direction.y < 0 && currentPosition.y > 0) {
    newPosY += direction.y;
  }

  const room = world[newPosX][newPosY];

  return {
    type: SET_PLAYER_ROOM,
    room,
    newPosX,
    newPosY
  }
};