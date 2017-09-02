import React, { Component } from 'react';

import ApplyBaseComponent from '../../lib/baseComponent';

class MainFrame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>chau</p>;
  }
}

const MainFrameContainer = ApplyBaseComponent(MainFrame);

export default <MainFrameContainer />;
