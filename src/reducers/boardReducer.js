import * as BoardActionTypes from '../actions/BoardActionTypes';

export default (state = { states: [], viewingIndex: 0, states: [], isPlayable: true }, action) => {
  switch (action.type) {
    case BoardActionTypes.INITIALIZE:
      const copy = Object.assign({}, {}, action.board);
      return Object.assign({}, state, { board: action.board, states: [copy], viewingIndex: 0, isPlayable: true });

    case BoardActionTypes.MOVE_PIECE:
      let upper = state.viewingIndex + 1;
      return Object.assign({}, state, { board: action.board, viewingIndex: upper });

    case BoardActionTypes.RECORD_STATE:
      return { ...state,
               states: [...state.states, action.snapshot]
             }
    case BoardActionTypes.REWIND:
      let downer = state.viewingIndex - 1;
      return Object.assign({}, state, {board: state.states[downer], viewingIndex: downer, isPlayable: false });

    case BoardActionTypes.REPLAY:
      let newViewingIndex = state.viewingIndex + 1;
      return Object.assign({}, state, { board: state.states[newViewingIndex], viewingIndex: newViewingIndex, isPlayable: action.shouldBePlayable });

    default:
      return state;
  }
};
