import React, { Component } from 'react';

class LoadingScreen extends Component {
  render() {
    return (
      <div className="loading-screen">
        <div /> { /* hack to center vertically with flex */ }
        <div className="loading-screen__message">
          Loading
        </div>
        <div />
      </div>
    );
  }
}

export default LoadingScreen;
