import { combineReducers } from 'redux';
import squares from './squareReducer';
// import projects from './project-reducer';

const rootReducer = combineReducers({
  // projects: projects,
  squares: squares
});

export default rootReducer;
