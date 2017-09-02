import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class TitleScreen extends Component {
  render() {
    return (
      <div className="title-screen">
        <p>title screen</p>
      </div>
    );
  }
}

export default TitleScreen;
