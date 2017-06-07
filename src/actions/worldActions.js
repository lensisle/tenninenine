import * as ActionTypes from "./../actions/actionTypes";

import { createWorld } from "./../game/world";

// TODO: create the world dynamically through a form
export const setToGameplayWorld = (position) => {

  const world = createWorld(20, 20);
  const currentRoom = world[position.x][position.y];

  return {
    type: ActionTypes.SET_TO_GAMEPLAY_WORLD,
    world,
    currentRoom,
    position,
    previousPosition: position
  };
};

// TODO: previous position should be set in another action
export const setPlayerRoom = (rooms, currentPosition, direction) => {
  const worldSize = {
    width: rooms.length,
    height: rooms[0].length
  };

  let newPosX = currentPosition.x;
  let newPosY = currentPosition.y;

  let previousPosition = {
    x: 0,
    y: 0
  };

  if(direction.x > 0 && currentPosition.x < worldSize.width - 1) {
    newPosX += direction.x;
  } else if(direction.x < 0 && currentPosition.x > 0) {
    newPosX += direction.x;
  } else if(direction.y > 0 && currentPosition.y < worldSize.height - 1) {
    newPosY += direction.y;
  } else if(direction.y < 0 && currentPosition.y > 0) {
    newPosY += direction.y;
  }

  const room = rooms[newPosX][newPosY];
  
  if(newPosX !== currentPosition.x || newPosY !== currentPosition.y) {
    previousPosition["x"] = currentPosition.x;
    previousPosition["y"] = currentPosition.y;
  }

  return {
    type: ActionTypes.SET_PLAYER_ROOM,
    room,
    position: { x: newPosX, y: newPosY },
    previousPosition
  }
};

export const backPreviousPosition = (rooms, currentPosition, previousPosition) => {
  const room = rooms[previousPosition.x][previousPosition.y];
  return {
    type: ActionTypes.BACK_PREVIOUS_POSITION,
    room,
    position: previousPosition,
    previousPosition: currentPosition
  };
};