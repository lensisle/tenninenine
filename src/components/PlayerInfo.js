import React from "react";
import PropTypes from 'prop-types';

export default class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="player-info">
        <p> Name: Cam - HP: 100 MP: 50 </p>
      </div>
    )
  }
}