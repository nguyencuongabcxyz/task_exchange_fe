import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';

// Define middleware
const loggerMiddleware = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware],
})

export default store;