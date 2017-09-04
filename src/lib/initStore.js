import { logger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import rootReducer from './reducers';

export default function(initState) {
  const middlewares = [];
  const middlewaresApplied = [];

  middlewares.push(logger);
  middlewaresApplied.push('logger');

  if (!window.store) {
    let storeMiddlewares = null;

    const epicMiddleware = createEpicMiddleware(rootEpic);
    middlewares.push(epicMiddleware);
    middlewaresApplied.push('epicMiddleware');

    if (window.devToolsExtension) {
      middlewaresApplied.push('devToolsExtension');
      storeMiddlewares = compose(applyMiddleware(...middlewares), window.devToolsExtension());
    } else {
      storeMiddlewares = compose(applyMiddleware(...middlewares));
    }

    const store = createStore(rootReducer, initState, storeMiddlewares);
    window.store = store;
  }

  return {
    store,
    middlewaresApplied,
  };
}
