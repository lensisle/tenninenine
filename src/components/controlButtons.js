import React from "react";

const ControlButtons = ({onMove, actionName}) => (
  <div className="controls">
    <button onClick={onMove.left} className="controls__buttons controls--button">Move Left</button>
    <button onClick={onMove.right} className="controls__buttons controls--button">Move Right</button>
    <button onClick={onMove.up} className="controls__buttons controls--button">Move Up</button>
    <button onClick={onMove.down} className="controls__buttons controls--button">Move Down</button>
    <button className="controls__buttons controls--button">{actionName}</button>
  </div>
)

export default ControlButtons;