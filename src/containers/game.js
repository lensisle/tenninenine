import React from "react";
import { connect } from "react-redux";

import { SET_PLAYER_ROOM } from "./../actions/actionTypes";

import Scene from "./../components/scene";
import PlayerStats from "./../components/playerStats";
import Controls from "./controls";

class Game extends React.Component {
  render() {
    return (
      <div>
        <PlayerStats player={this.props.player} position={this.props.currentRoom.position} />
        <Scene room={this.props.currentRoom.room} />
        <Controls />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => (
  {
    currentRoom: state.playerRoom,
    player: state.player
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    setPlayerRoom(room) {
      dispatch({ type:  SET_PLAYER_ROOM, room });
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game)