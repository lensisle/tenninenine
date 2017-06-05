import React from "react";

const ControlButtons = ({onMove, actionName}) => (
  <div className="controls">
    <button className="controls__buttons controls--button">Move Left</button>
    <button className="controls__buttons controls--button">Move Right</button>
    <button className="controls__buttons controls--button">Move Up</button>
    <button className="controls__buttons controls--button">Move Down</button>
    <button className="controls__buttons controls--button">{actionName}</button>
  </div>
)

export default ControlButtons;