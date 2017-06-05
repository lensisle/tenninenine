import React from "react";
import { connect } from "react-redux";

import ControlButtons from "./../components/controlButtons";

import { setPlayerRoom } from "./../actions/playerRoomActions";

class Controls extends React.Component {
  render() {
    return (
      <ControlButtons onMove={this.props.onMove} actionName={this.props.action} />
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    action: state.playerRoom.room.action,
    playerPosition: state.playerRoom.position
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    onMove(direction) {
      dispatch(setPlayerRoom(props.world, props.playerPosition, direction));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Controls);