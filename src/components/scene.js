import React from "react";

const Scene = ({ room }) => (
  <div className="wrapper--border">
    <img src={room.image} className="scene--image" />
    <p>Room: {room.description}</p>
  </div>
)


export default Scene;