import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

import ApplyBaseComponent from '../../lib/baseComponent';

import TitleScreenContainer from '../TitleScreen/TitleScreen.container';

class MainFrameContainer extends Component {
  static propTypes = {
    MainFrameState: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.views = {};
    this.views.TitleScreen = TitleScreenContainer;
  }

  render() {
    const { MainFrameState } = this.props;
    const currenViewId = get(MainFrameState, 'currentView', 'default');
    const CurrentView = this.views[currenViewId];

    return <div className="main-frame"><CurrentView /></div>;
  }
}

const MainFrameConnect = connect(mapStateToProps)(MainFrameContainer);
const MainFrameStore = ApplyBaseComponent(MainFrameConnect);

function mapStateToProps(state) {
  return {
    MainFrameState: state.MainFrameState,
  };
}

export default <MainFrameStore />;
