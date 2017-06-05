import { CREATE_PLAYER, DAMAGE_PLAYER, HEAL_PLAYER } from "./actionTypes";

export const createPlayer = (name) => (
  {
    type: CREATE_PLAYER,
    name,
    hp: 100
  }
);

export const damagePlayer = (damage) => (
  {
    type: DAMAGE_PLAYER,
    damage
  } 
);

export const healPlayer = (heal) => (
  {
    type: HEAL_PLAYER,
    heal
  }
);