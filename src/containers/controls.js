import React from "react";
import { connect } from "react-redux";

import ControlButton from "./../components/controlButton";

import { setPlayerRoom } from "./../actions/playerRoomActions";

class Controls extends React.Component {
  render() {
    const movements = {
      left: () => this.props.onMoveLeft(this.props.world, this.props.playerPosition),
      right: () => this.props.onMoveRight(this.props.world, this.props.playerPosition),
      up: () => this.props.onMoveUp(this.props.world, this.props.playerPosition),
      down: () => this.props.onMoveDown(this.props.world, this.props.playerPosition)
    };
    return (
      <div className="controls">
        <ControlButton onClick={movements.left} text="Move Left" />
        <ControlButton onClick={movements.right} text="Move Right" />
        <ControlButton onClick={movements.up} text="Move Up" />
        <ControlButton onClick={movements.down} text="Move Down" />
        <ControlButton onClick={ () => {} } text={this.props.action} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    action: state.playerRoom.room.action,
    playerPosition: state.playerRoom.position,
    world: state.world
  }
);

// TODO: refactor this functions to avoid passing the
// entire world as an argument.
const mapDispatchToProps = (dispatch, props) => (
  {
    onMoveLeft(world, currentPos) {
      dispatch(setPlayerRoom(world, currentPos, { x: -1, y: 0 }));
    },
    onMoveRight(world, currentPos) {
      dispatch(setPlayerRoom(world, currentPos, { x: 1, y: 0 }));
    },
    onMoveUp(world, currentPos) {
      dispatch(setPlayerRoom(world, currentPos, {x: 0, y: 1}));
    },
    onMoveDown(world, currentPos) {
      dispatch(setPlayerRoom(world, currentPos, {x: 0, y: -1}));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);