import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import Logger from 'redux-logger';
// import thunk from 'redux-thunk';
import Sagas from 'redux-saga';

import rootReducer from './root-reducer';
// import { sagasStart } from '../redux/shop/shop-sagas';
import rootSaga from './root-saga';

const sagaMiddleware = Sagas();
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(Logger);
}



export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
