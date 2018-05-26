import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Square.css';
import { Piece } from './../'

class Square extends Component {
  constructor(props) {
    super(props);
  }

  toggleActiveSquare = () => {
    let {occupier, isActive, actions, file, rank, activeSquare, board, isPlayable} = this.props;

    if (!isPlayable) {
      return;
    }

    const coord = `${file}${rank}`;

    // activate this square if nothing is active and it has a piece
    if (!isActive && !activeSquare && occupier) {
      actions.squareActions.setActiveSquare(coord);
      return;
    }

    // toggle this square
    if (isActive) {
      actions.squareActions.setActiveSquare(''); // unselect
      return;
    }

    // clicked a square while active that is not the active one
    if (!isActive && activeSquare) {
      if (occupier && occupier.charAt(0) === board[activeSquare].charAt(0)) {
        return;
      }

      actions.boardActions.movePiece(activeSquare, coord, board);
      actions.squareActions.setActiveSquare(''); // unselect
      actions.boardActions.recordBoardState(Object.assign({}, {}, board));
      console.log(this.props);
      return;
    }

  };

  render() {
    let { isBlack, occupier, isActive } = this.props;

    return (
      <div className={`square ${isBlack ? 'black' : ''} ${isActive ? 'active' : ''}`}
           onClick={this.toggleActiveSquare}>
        { occupier && <Piece piece={occupier}/> }
      </div>
    );
  }
}

Square.propTypes = {
  isBlack: PropTypes.bool,
  isActive: PropTypes.bool,
  occupier: PropTypes.string,
  rank: PropTypes.number,
  file: PropTypes.string
}

Square.defaultProps = {
  isBlack: false,
  isActive: false
};

export default Square;
