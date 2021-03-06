import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const middleWare = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
