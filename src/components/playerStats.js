import React from "react";

const PlayerStats = ({player, position}) => (
  <div className="player-stats">
    <h1 className="player-stats__text player-stats--text ">Name: {player.name} - [x: {position.x} y: {position.y}]</h1>
    <h1 className="player-stats__text player-stats--text ">HP: {player.hp}</h1>
  </div>
)

export default PlayerStats;