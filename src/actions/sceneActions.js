import { TOGGLE_ROOM_DESCRIPTION } from "./actionTypes";

export const toggleRoomDescription = (currentDescriptionEnabled) => {
  return {
    type: TOGGLE_ROOM_DESCRIPTION,
    showSceneDescription: !currentDescriptionEnabled
  };
};