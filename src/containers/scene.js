import React from "react";
import { connect } from "react-redux";

import PlayerStats from "./../components/playerStats";

import { TOGGLE_SCENE_DESCRIPTION } from "./../actions/actionTypes";
import { toggleSceneDescription } from "./../actions/playerRoomActions";

class Scene extends React.Component {
  render() { 
    const showDescription = () => this.props.toggleDescription(this.props.currentRoom.showSceneDescription)
    const sceneStyle = this.props.currentRoom.showSceneDescription ? "wrapper--border scene" : "wrapper--border";
    return (
      <div className={sceneStyle}>
        <PlayerStats player={this.props.player} position={this.props.currentRoom.position} />
        <div onClick={showDescription}>
          {this.getInfo(this.props.currentRoom.showSceneDescription)}
        </div>
      </div>
    );
  }

  getInfo(showSceneDescription) {
    if(showSceneDescription) {
      return (
        <div>
          <p className="scene--name scene__text">{this.props.currentRoom.room.name}</p>
          <p className="scene--description scene__text">{this.props.currentRoom.room.description}</p>
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.currentRoom.room.image} className="scene--image" />
          <p className="scene--name scene__text">{this.props.currentRoom.room.name}</p>
        </div>
      );
    }
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
    toggleDescription(showSceneDescription) {
      dispatch(toggleSceneDescription(showSceneDescription));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Scene)