import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectionScreen from '../../components/SelectionScreen/SelectionScreen';

import Data from '../../data/Specializations.json';

import { onSetCharacterSpec } from '../../redux/player/player.actions';

class SelectionScreenContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    SelectionScreenState: PropTypes.object.isRequired,
    PlayerState: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.maxIndex = Data.Specializations.length;
    this.specs = Data.Specializations;
  }

  componentDidMount() {
    const { dispatch, SelectionScreenState } = this.props;
    const { selectedIndex } = SelectionScreenState;
    const selectedSpec = this.specs[selectedIndex];
    dispatch(onSetCharacterSpec(selectedSpec));
  }

  render() {
    const { PlayerState } = this.props;
    const { spec } = PlayerState;
    return <SelectionScreen {...spec} />;
  }
}

const SelectionScreenConnect = connect(mapStateToProps)(SelectionScreenContainer);

function mapStateToProps(state) {
  return {
    SelectionScreenState: state.SelectionScreenState,
    PlayerState: state.PlayerState,
  };
}

export default SelectionScreenConnect;
