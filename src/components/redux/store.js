import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import Logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [Logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);
