import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import history from '../utils/history';
import rootReducers from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

// mount it on the Store
export const store = createStore(rootReducers, composeEnhancer(applyMiddleware(...middleware)));

// then run the saga
sagaMiddleware.run(rootSaga);
