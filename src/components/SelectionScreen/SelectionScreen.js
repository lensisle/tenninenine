import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectionScreenStats from '../SelectionScreenStats/SelectionScreenStats';
import Explorer from '../../svg-components/Explorer';

class SelectionScreen extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    onMoveSelection: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.specTypes = {};
    this.specTypes.Explorer = Explorer;
    this.specTypes.Hunter = null;
    this.specTypes.Strategist = null;
  }

  render() {
    const { name, description, onMoveSelection } = this.props;
    let CurrentSpecSVG = null;
    if (name) {
      CurrentSpecSVG = this.specTypes[name];
    }

    return (
      <div className="selection-screen">
        <div className="selection-screen__info">
          <div className="selection-screen__spec-name">{name}</div>
          <SelectionScreenStats {...this.props} />
          <div className="selection-screen__selection-buttons">
            <button
              onClick={() => onMoveSelection(-1)}
              className="selection-screen__selection-button"
            >
              Left
            </button>
            <button
              onClick={() => onMoveSelection(1)}
              className="selection-screen__selection-button"
            >
              Right
            </button>
          </div>
          <div className="selection-screen__description">{description}</div>
          <div className="selection-screen__spec-svg-container">
            {CurrentSpecSVG ? <CurrentSpecSVG /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionScreen;
