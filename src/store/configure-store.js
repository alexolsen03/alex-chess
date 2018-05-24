import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import InitialState from './initialState';

// console.log(InitialState);

export default (initialState = { board: { a1: 'bB'} }) => {
  return createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};
