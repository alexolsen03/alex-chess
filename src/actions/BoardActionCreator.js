import * as BoardActionTypes from './BoardActionTypes';

const startingState = {
  board: {
    a1: 'wR', b1: 'wN', c1: 'wB', d1: 'wQ', e1: 'wK', f1: 'wB', g1: 'wN', h1: 'wR',
    a2: 'wP', b2: 'wP', c2: 'wP', d2: 'wP', e2: 'wP', f2: 'wP', g2: 'wP', h2: 'wP',
    a8: 'bR', b8: 'bN', c8: 'bB', d8: 'bQ', e8: 'bK', f8: 'bB', g8: 'bN', h8: 'bR',
    a7: 'bP', b7: 'bP', c7: 'bP', d7: 'bP', e7: 'bP', f7: 'bP', g7: 'bP', h7: 'bP'
  }
}

export const initializeBoard = () => {
  return {
    type: BoardActionTypes.INITIALIZE,
    board: Object.assign({}, {}, startingState.board)
  }
};

export const movePiece = (activePiece, toCoord, board) => {
  const toPiece = board[toCoord];
  const prevPiece = board[activePiece];

  board[toCoord] = prevPiece;
  board[activePiece] = null;

  return {
    type: BoardActionTypes.MOVE_PIECE,
    board: board
  }
}

export const recordBoardState = (board) => {
  return {
    type: BoardActionTypes.RECORD_STATE,
    snapshot: board
  }
}

export const rewind = () => {
  return {
    type: BoardActionTypes.REWIND,
    board: {}
  }
}
