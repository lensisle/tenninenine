import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles/main.scss';

import MainFrame from './containers/MainFrame/MainFrame.container';

const targetNode = document.getElementById('app');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    targetNode
  );
};

render(MainFrame);

if (module.hot) {
  module.hot.accept('./containers/MainFrame/MainFrame.container', () => {
    const NextApp = require('./containers/MainFrame/MainFrame.container')
      .default;
    render(NextApp);
  });
}
