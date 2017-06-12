/* eslint-disable global-require, no-underscore-dangle */
import thunkMiddleware from 'redux-thunk';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import compose from 'redux/lib/compose';
import logger from 'redux-logger';

import rootReducer from './../reducers/rootReducer';

// initial state is optional
function configureStore(initialState) {
  const middleware = ((env) => {
    if (env === 'test') {
      return applyMiddleware(thunkMiddleware);
    }
    return applyMiddleware(logger, thunkMiddleware);
  })(process.env.NODE_ENV);

  const createStoreWithMiddleware = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  );

  const store =
      createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot
    .accept('./../reducers/rootReducer', () => {
      const nextRootReducer = require('./../reducers/rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
