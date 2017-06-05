import Door from "./../../assets/images/door.png";
import Entrance from "./../../assets/images/entrance.png";
import Trap01 from "./../../assets/images/trap01.png";
import Trap02 from "./../../assets/images/trap02.png";
import Treasure from "./../../assets/images/treasure.png";
import Hall from "./../../assets/images/hall.png";
import Exit from "./../../assets/images/exit.png";
import FirstScene from "./../../assets/images/firstScene.png";

const RoomTypes = [
  {
    name: "Lost on an island",
    description: "You woke up on a hill, it's at night and it is very cold. You do not know where you are or where you come from.",
    action: "Explore",
    probSuccess: 100,
    actionSuccess: "You get up and walk around looking for information.",
    actionFailed: "...",
    requirements: [],
    image: FirstScene
  },
  {
    name: "Wooden Door",
    description: "There's a wooden door blocking your path. Maybe a cooper key could open it.",
    action: "Open",
    probSuccess: 100,
    actionSuccess: "You opened the door.",
    actionFailed: "You don't have a key to open it.",
    requirements: ["wooden-key"],
    image: Door
  },
  {
    name: "Castle Entrance",
    description: "You are about to enter this mysterious castle. You look around and there don't seem to be many other options.",
    action: "enter",
    probSuccess: 100,
    actionSuccess: "After passing the entrance you hear a loud noise of doors closing behind you.",
    actionFailed: "...",
    requirements: [],
    image: Entrance
  },
  {
    name: "Trap of thorns",
    description: "You see a trap, trying to jump it could hurt you a lot.",
    action: "jump",
    probSuccess: 60,
    actionSuccess: "You dodged the trap successfully",
    actionFailed: "You were hurt trying to avoid the trap",
    requirements: [],
    image: Trap01
  },
  {
    name: "Trap of blades",
    description: "You see a trap, trying to avoid it could hurt you a lot.",
    action: "jump",
    probSuccess: 80,
    actionSuccess: "You dodged the trap successfully",
    actionFailed: "You were hurt trying to avoid the trap",
    requirements: [],
    image: Trap02
  },
  {
    name: "Small Treasure",
    description: "You found a chest, it can have many surprises inside.",
    action: "open",
    probSuccess: 100,
    actionSuccess: "You opened the chest and found: ",
    actionFailed: "...",
    requirements: [],
    image: Treasure
  },
  {
    name: "Hall",
    description: "",
    actions: "",
    probSuccess: 100,
    actionSuccess: "",
    actionFailed: "",
    requirements: [],
    image: Hall
  },
  {
    name: "Exit",
    description: "You found the exit.",
    actions: "",
    probSuccess: 100,
    actionSuccess: "",
    actionFailed: "",
    requirements: [],
    image: Exit
  }
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// For now we will keep the world generation simple.
// TODO: add more generation rules.
const createWorld = (width, height) => {
  const worldInstance = new Array(width);

  for(let i = 0; i < height; i++) {
    worldInstance[i] = new Array(height);
  }

  for(let i = 0; i < worldInstance.length; i++) {
    for(let j = 0; j < worldInstance[i].length; j++) {
      worldInstance[i][j] = RoomTypes[0, getRandomInt(0, RoomTypes.length)];
    }
  }

  worldInstance[0][0] = RoomTypes[0]; // set always the first position to the hill scene

  return worldInstance;
};

export { createWorld };