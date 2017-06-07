import React from "react";
import { connect } from "react-redux";

import ControlButton from "./../components/controlButton";

import * as WorldActions from "./../actions/worldActions";
import * as GameplayActions from "./../game/gameplayActions";


class Controls extends React.Component {
  componentWillMount() {
    const actions = {};
    actions[GameplayActions.ACTION_BACK] = () => 
      this.props.moveToPreviousPosition(this.props.world.rooms, this.props.playerPosition, this.props.previousPosition);
    actions[GameplayActions.ACTION_EXPLORE_SORROUNDINGS] = () => this.props.onMoveUp(this.props.world.rooms, this.props.playerPosition);
    actions[GameplayActions.ACTION_ENTER_CASTLE] = () => this.props.setToGameplayWorld({ x: 1, y: 1 }); // Player always starts at x:1 y: 1

    this.actions = actions;

    const movements = {};
    movements["left"] = () => this.props.onMoveLeft(this.props.world.rooms, this.props.playerPosition);
    movements["right"] = () => this.props.onMoveRight(this.props.world.rooms, this.props.playerPosition);
    movements["up"] = () => this.props.onMoveUp(this.props.world.rooms, this.props.playerPosition);
    movements["down"] = () => this.props.onMoveDown(this.props.world.rooms, this.props.playerPosition);

    this.movements = movements;
  }

  render() {
    const leftDisabled = this.isDisabled("left");
    const rightDisabled = this.isDisabled("right");
    const upDisabled = this.isDisabled("up");
    const downDisabled = this.isDisabled("down");
    const actionDisabled = this.isDisabled("action");

    const leftOnClick = leftDisabled ? () => {} : this.movements["left"];
    const leftText = leftDisabled ? "-" : "Move Left";

    const rightOnClick = rightDisabled ? () => {} : this.movements["right"];
    const rightText = rightDisabled ? "-" : "Move Right";

    const upOnClick = upDisabled ? () => {} : this.movements["up"];
    const upText = upDisabled ? "-" : "Move Up";

    const downOnClick = downDisabled ? () => {} : this.movements["down"];
    const downText = downDisabled ? "-" : "Move Down";

    const actionOnClick = actionDisabled ? () => {} : this.actions[this.props.currentRoom.action];
    const actionText = actionDisabled ? "-" : this.props.currentRoom.action;

    return (
      <div className="controls">
        <ControlButton onClick={leftOnClick} text={leftText} />
        <ControlButton onClick={rightOnClick} text={rightText} />
        <ControlButton onClick={upOnClick} text={upText} />
        <ControlButton onClick={downOnClick} text={downText} />
        <ControlButton onClick={actionOnClick} text={actionText} />
      </div>
    )
  }

  isDisabled(controlName) {
    for(let disabled of this.props.currentRoom.disableButtons) {
      if(disabled === controlName) {
        return true;
      }
    }
    return false;
  }
}

const mapStateToProps = (state, props) => (
  {
    playerPosition: state.world.position,
    previousPosition: state.world.previousPosition,
    world: state.world,
    currentRoom: state.world.currentRoom
  }
);

// TODO: refactor this functions to avoid passing the
// entire world as an argument.
const mapDispatchToProps = (dispatch, props) => (
  {
    onMoveLeft(rooms, currentPos) {
      dispatch(WorldActions.setPlayerRoom(rooms, currentPos, { x: -1, y: 0 }));
    },
    onMoveRight(rooms, currentPos) {
      dispatch(WorldActions.setPlayerRoom(rooms, currentPos, { x: 1, y: 0 }));
    },
    onMoveUp(rooms, currentPos) {
      dispatch(WorldActions.setPlayerRoom(rooms, currentPos, {x: 0, y: 1}));
    },
    onMoveDown(rooms, currentPos) {
      dispatch(WorldActions.setPlayerRoom(rooms, currentPos, {x: 0, y: -1}));
    },
    moveToPreviousPosition(rooms, currentPos, previousPos) {
      dispatch(WorldActions.backPreviousPosition(rooms, currentPos, previousPos));
    },
    setToGameplayWorld(position) {
      dispatch(WorldActions.setToGameplayWorld(position));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);