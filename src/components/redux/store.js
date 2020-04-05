import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [Logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
