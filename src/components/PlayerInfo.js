import React from "react";

const PlayerInfo = ({player}) => (
  <div>
    <h1>Name: {player.name}</h1>
    <h1>HP: {player.hp}</h1>
  </div>
)

export default PlayerInfo;