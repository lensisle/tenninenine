import React from "react";
import { connect } from "react-redux";

import PlayerStats from "./../components/playerStats";

import { TOGGLE_SCENE_DESCRIPTION } from "./../actions/actionTypes";
import * as SceneActions from "./../actions/sceneActions";

class Scene extends React.Component {
  render() {
    const sceneStyle = this.props.showSceneDescription ? "wrapper--border scene" : "wrapper--border";
    return (
      <div className={sceneStyle}>
        <PlayerStats player={this.props.player} position={this.props.position} />
        <div>
          {this.getInfo(this.props.showSceneDescription)}
        </div>
      </div>
    );
  }

  getInfo(showSceneDescription) {
    const showDescription = () => this.props.toggleDescription(this.props.showSceneDescription)
    if(showSceneDescription) {
      return (
        <div>
          <p onClick={showDescription} className="scene--name scene__text">{this.props.currentRoom.name}</p>
          <p className="scene--description scene__text">{this.props.currentRoom.description}</p>
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.currentRoom.image} className="scene--image" />
          <div>
            <p onClick={showDescription} className="scene--name scene__text">{this.props.currentRoom.name}</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => (
  {
    currentRoom: state.world.currentRoom,
    player: state.player,
    showSceneDescription: state.scene.showSceneDescription,
    position: state.world.position
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    toggleDescription(showSceneDescription) {
      dispatch(SceneActions.toggleRoomDescription(showSceneDescription));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Scene)