import React from "react";

const PlayerStats = ({player, position}) => (
  <div>
    <h1>Name: {player.name} - Coords: [x: {position.x} y: {position.y}]</h1>
    <h1>HP: {player.hp}</h1>
  </div>
)

export default PlayerStats;