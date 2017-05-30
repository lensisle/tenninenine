import React from "react";
import PropTypes from 'prop-types';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.onControlClicked = this.onControlClicked.bind(this);
  }

  render() {
    return (
      <div className="buttons">
        <button onClick={e => {
            e.preventDefault();
            this.onControlClicked("left") 
          } } className="buttons__button buttons__button--control">Left</button>
        <button onClick={e => {
            e.preventDefault();
            this.onControlClicked("right") 
          } } className="buttons__button buttons__button--control">Right</button>
        <button onClick={e => {
            e.preventDefault();
            this.onControlClicked("up") 
          } } className="buttons__button buttons__button--control">Up</button>
        <button onClick={e => {
            e.preventDefault();
            this.onControlClicked("down") 
          } } className="buttons__button buttons__button--control">Down</button>
      </div>
    )
  }

  onControlClicked(direction) {
    console.log(direction);
  }
}