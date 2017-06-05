import React from "react";

const Scene = ({ room }) => (
  <div className="wrapper--border scene">
    <img src={room.image} className="scene--image" />
    <p className="scene--name scene__text">{room.name}</p>
  </div>
)


export default Scene;