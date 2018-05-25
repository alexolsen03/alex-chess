import * as BoardActionTypes from '../actions/BoardActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BoardActionTypes.INITIALIZE:
      console.log('reducing board to', action.board);
      return Object.assign({}, state, { board: action.board });

    case BoardActionTypes.MOVE_PIECE:
      return Object.assign({}, state, { board: action.board });

    default:
      return state;
  }
};
