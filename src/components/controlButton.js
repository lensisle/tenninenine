import React from "react";

const ControlButton = ({onClick, text}) => (
  <button onClick={onClick} className="controls__buttons controls--button">{text}</button>
)

export default ControlButton;