import app from './appDuck.js';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  app
});

export default createStore(
  rootReducer,
  // TODO disable before deploying
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
