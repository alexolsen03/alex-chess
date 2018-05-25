import { combineReducers } from 'redux';
import squares from './squareReducer';
import board from './boardReducer';
// import projects from './project-reducer';

const rootReducer = combineReducers({
  // projects: projects,
  squares: squares,
  board: board
});

export default rootReducer;
