import * as SquareActionTypes from './SquareActionTypes';

export const setActiveSquare = (activeSquare) => {
  return {
    type: SquareActionTypes.ACTIVATE,
    activeSquare: activeSquare
  }
};
