import React from "react";

const Scene = ({ room }) => (
  <div className="wrapper--border">
    <img src={room.image} className="scene--image" />
    <p className="scene--name scene__text">{room.name}</p>
    <p className="scene--description scene__text">{room.description}</p>
  </div>
)


export default Scene;