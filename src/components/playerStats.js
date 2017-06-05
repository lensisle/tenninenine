import React from "react";

const PlayerStats = ({player, position}) => (
  <div className="player-stats">
    <h1>Name: {player.name} - [x: {position.x} y: {position.y}]</h1>
    <h1>HP: {player.hp}</h1>
  </div>
)

export default PlayerStats;