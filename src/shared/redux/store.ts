import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from 'shared/saga/rootSaga';

// Define middleware
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;