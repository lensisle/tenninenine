import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectionScreen from '../../components/SelectionScreen/SelectionScreen';

import Data from '../../data/Specializations.json';

import { onSetCharacterSpec } from '../../redux/player/Player.actions';
import { onSetSelectedIndex } from './SelectionScreen.actions';

class SelectionScreenContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    SelectionScreenState: PropTypes.object.isRequired,
    PlayerState: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.onMoveSelection = this.onMoveSelection.bind(this);
  }

  componentDidMount() {
    this.maxIndex = Data.Specializations.length - 1;
    this.specs = Data.Specializations;
    this.onMoveSelection(0);
  }

  onMoveSelection(value) {
    const { dispatch, SelectionScreenState } = this.props;
    const { selectedIndex } = SelectionScreenState;
    let nextIndex = selectedIndex + value;
    if (nextIndex > this.maxIndex) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = this.maxIndex;
    }
    dispatch(onSetSelectedIndex(nextIndex));
    const selectedSpec = this.specs[nextIndex];
    dispatch(onSetCharacterSpec(selectedSpec));
  }

  render() {
    const { PlayerState } = this.props;
    const { spec } = PlayerState;
    return <SelectionScreen {...spec} onMoveSelection={this.onMoveSelection} />;
  }
}

const SelectionScreenConnect = connect(mapStateToProps)(
  SelectionScreenContainer
);

function mapStateToProps(state) {
  return {
    SelectionScreenState: state.SelectionScreenState,
    PlayerState: state.PlayerState,
  };
}

export default SelectionScreenConnect;
