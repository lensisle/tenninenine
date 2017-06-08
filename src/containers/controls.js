import React from "react";
import { connect } from "react-redux";

import ControlButton from "./../components/controlButton";

import * as WorldActions from "./../actions/worldActions";
import * as GameplayActions from "./../game/gameplayActions";


class Controls extends React.Component {
  componentWillMount() {
    this.initializeActions();
    this.createActionButtons();
  }

  componentWillUpdate() {
    this.createActionButtons();
  }

  initializeActions() {
    const rooms = this.props.world.rooms;
    const position = this.props.playerPosition;
    this.actions = {
      [GameplayActions.ACTION_EXPLORE_SORROUNDINGS]: () => this.props.onMoveUp(rooms, position)
    };
  }

  createActionButtons() {
    this.buttons = [];
    const buttonsData = this.props.currentRoom.buttons;
    const maxButtons = 5;

    let i = 0;
    for(i = 0; i < maxButtons - buttonsData.length; i++) {
      this.buttons.push(<ControlButton key={i} onClick={() => {}} text={GameplayActions.ACTION_NONE} />);
    }

    console.log(this.props.currentRoom, buttonsData);

    for(let j = 0; j < buttonsData.length; j++) {
      this.buttons.push(<ControlButton key={j + i} 
                                       onClick={this.actions[buttonsData[j].action]}
                                       text={buttonsData[j].action}
                        />);
    }
  }

  render() {
    return (
      <div className="controls">
        {this.buttons}
      </div>
    )
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