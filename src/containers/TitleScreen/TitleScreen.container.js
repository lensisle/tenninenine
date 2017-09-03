import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TitleScreen from '../../components/TitleScreen/TitleScreen';

import { onSetCurrentView } from '../MainFrame/MainFrame.actions';

class TitleScreenContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onStartPressed = this.onStartPressed.bind(this);
  }

  onStartPressed() {
    const { dispatch } = this.props;
    dispatch(onSetCurrentView('SelectionScreen'));
  }

  render() {
    return <TitleScreen onStartPressed={this.onStartPressed} />;
  }
}

const TitleScreenConnect = connect(mapStateToProps)(TitleScreenContainer);

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default TitleScreenConnect;
