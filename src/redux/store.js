import app from './appDuck.js';
import { compose, combineReducers, createStore } from 'redux';
import persistState from 'redux-localstorage'

const rootReducer = combineReducers({
  app
});

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistState(/*paths, config*/),
)

export default createStore(
  rootReducer,
  enhancer
)
