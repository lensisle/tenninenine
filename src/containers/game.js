import React from "react";
import { connect } from "react-redux";

import { SET_PLAYER_ROOM } from "./../actions/actionTypes";

import Scene from "./../components/scene";
import PlayerInfo from "./../components/playerInfo";
import Controls from "./controls";

class Game extends React.Component {
  render() {
    return (
      <div>
        <PlayerInfo player={this.props.player} />
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