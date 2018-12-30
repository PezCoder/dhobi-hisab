import app from './appDuck.js';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  app
});

export default createStore(rootReducer)
