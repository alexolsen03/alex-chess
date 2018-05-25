import * as SquareActionTypes from '../actions/SquareActionTypes';

const startingState = {
  activeSquare: ''
}

export default (state = startingState, action) => {
  switch (action.type) {
    case SquareActionTypes.ACTIVATE:
      return Object.assign({}, state, { activeSquare: action.activeSquare });

    default:
      return state;
  }
};
