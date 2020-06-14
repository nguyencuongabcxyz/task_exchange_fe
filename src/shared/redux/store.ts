import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { createLogger } from 'redux-logger';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Define middleware
const loggerMiddleware = createLogger();

const enhancer = composeEnhancers(applyMiddleware(loggerMiddleware));

const store = createStore(rootReducer, enhancer);

export default store;