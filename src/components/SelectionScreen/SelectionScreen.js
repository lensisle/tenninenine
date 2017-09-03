import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectionScreenStats from '../SelectionScreenStats/SelectionScreenStats';
import Explorer from '../../svg-components/Explorer';

class SelectionScreen extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.specTypes = {};
    this.specTypes.Explorer = Explorer;
  }
  render() {
    const {
      name,
      description,
    } = this.props;
    let CurrentSpecSVG = null;
    if (name) {
      CurrentSpecSVG = this.specTypes[name];
    }

    return (
      <div className="selection-screen">
        <div className="selection-screen__info">
          <div className="selection-screen__spec-name">{name}</div>
          <SelectionScreenStats {...this.props} />
          <div className="selection-screen__description">{description}</div>
          <div className="selection-screen__spec-svg-container">
            { CurrentSpecSVG ? <CurrentSpecSVG /> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionScreen;
