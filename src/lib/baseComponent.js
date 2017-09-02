import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import initStore from './initStore';


function ApplyBaseComponent(Component) {
  return class extends React.Component {
    static propTypes = {
      initialState: PropTypes.object,
    };
    static defaultProps = {
      initialState: undefined,
    };
    constructor(props) {
      super(props);
      const { store } = initStore(props.initialState);
      this.store = store;
    }
    render() {
      return (
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };
}

export default ApplyBaseComponent;
