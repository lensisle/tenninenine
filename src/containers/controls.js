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
    return (
      <div className="controls">
        <ControlButton onClick={this.movements["left"]} text="Move Left" />
        <ControlButton onClick={this.movements["right"]} text="Move Right" />
        <ControlButton onClick={this.movements["up"]} text="Move Up" />
        <ControlButton onClick={this.movements["down"]} text="Move Down" />
        <ControlButton onClick={this.actions[GameplayActions.ACTION_BACK]} text={this.props.playerRoom.room.action} />
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