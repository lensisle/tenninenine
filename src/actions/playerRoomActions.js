import { SET_PLAYER_ROOM, TOGGLE_SCENE_DESCRIPTION, BACK_PREVIOUS_POSITION } from "./actionTypes";

// TODO: previous position should be set in another action
export const setPlayerRoom = (world, currentPosition, direction) => {
  const worldSize = {
    width: world.length,
    height: world[0].length
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

  const room = world[newPosX][newPosY];
  
  if(newPosX !== currentPosition.x || newPosY !== currentPosition.y) {
    previousPosition["x"] = currentPosition.x;
    previousPosition["y"] = currentPosition.y;
  }

  return {
    type: SET_PLAYER_ROOM,
    room,
    position: { x: newPosX, y: newPosY },
    previousPosition
  }
};

export const toggleSceneDescription = (currentDescriptionEnabled) => {
  return {
    type: TOGGLE_SCENE_DESCRIPTION,
    showSceneDescription: !currentDescriptionEnabled
  };
};

export const backPreviousPosition = (world, currentPosition, previousPosition) => {
  const room = world[previousPosition.x][previousPosition.y];
  return {
    type: BACK_PREVIOUS_POSITION,
    room,
    position: previousPosition,
    previousPosition: currentPosition
  };
};