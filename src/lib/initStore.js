import { logger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers';

export default function(initState) {
  const middlewares = [];
  const middlewaresApplied = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    middlewaresApplied.push('logger');

    if (process.browser && window.devToolsExtension && !store) {
      const storeMiddlewares = compose(applyMiddleware(...middlewares), window.devToolsExtension());
      const store = createStore(rootReducer, initState, storeMiddlewares);
      window.store = store;
      middlewaresApplied.push('devToolsExtension');

      return {
        store,
        middlewaresApplied,
      };
    }
  }

  if (!process.browser || !store) {
    const storeMiddlewares = compose(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initState, storeMiddlewares);
    global.store = store;
  }

  return {
    store,
    middlewaresApplied,
  };
}
