import React from "react";
import PropTypes from 'prop-types';

export default class Controls extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button className="buttons__button buttons__button--control">Left</button>
        <button className="buttons__button buttons__button--control">Right</button>
        <button className="buttons__button buttons__button--control">Up</button>
        <button className="buttons__button buttons__button--control">Down</button>
      </div>
    )
  }
}