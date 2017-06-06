import React from "react";
import { connect } from "react-redux";

import ControlButton from "./../components/controlButton";

import * as RoomActions from "./../actions/playerRoomActions";
import * as GameplayActions from "./../game/gameplayActions";


class Controls extends React.Component {
  componentWillMount() {
    const actions = {};
    actions[GameplayActions.ACTION_BACK] = () => 
      this.props.moveToPreviousPosition(this.props.world, this.props.playerPosition, this.props.previousPosition);

    this.actions = actions;

    const movements = {};
    movements["left"] = () => this.props.onMoveLeft(this.props.world, this.props.playerPosition);
    movements["right"] = () => this.props.onMoveRight(this.props.world, this.props.playerPosition);
    movements["up"] = () => this.props.onMoveUp(this.props.world, this.props.playerPosition);
    movements["down"] = () => this.props.onMoveDown(this.props.world, this.props.playerPosition);

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

    const actionOnClick = actionDisabled ? () => {} : this.actions[GameplayActions.ACTION_BACK];
    const actionText = actionDisabled ? "-" : this.props.playerRoom.room.action;

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
    for(let disabled of this.props.playerRoom.room.disableButtons) {
      if(disabled === controlName) {
        return true;
      }
    }
    return false;
  }
}

const mapStateToProps = (state, props) => (
  {
    playerRoom: state.playerRoom,
    playerPosition: state.playerRoom.position,
    previousPosition: state.playerRoom.previousPosition,
    world: state.world
  }
);

// TODO: refactor this functions to avoid passing the
// entire world as an argument.
const mapDispatchToProps = (dispatch, props) => (
  {
    onMoveLeft(world, currentPos) {
      dispatch(RoomActions.setPlayerRoom(world, currentPos, { x: -1, y: 0 }));
    },
    onMoveRight(world, currentPos) {
      dispatch(RoomActions.setPlayerRoom(world, currentPos, { x: 1, y: 0 }));
    },
    onMoveUp(world, currentPos) {
      dispatch(RoomActions.setPlayerRoom(world, currentPos, {x: 0, y: 1}));
    },
    onMoveDown(world, currentPos) {
      dispatch(RoomActions.setPlayerRoom(world, currentPos, {x: 0, y: -1}));
    },
    moveToPreviousPosition(world, currentPos, previousPos) {
      dispatch(RoomActions.backPreviousPosition(world, currentPos, previousPos));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);