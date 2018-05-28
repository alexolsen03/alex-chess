import React, { Component } from 'react';
import { Rank } from '../../components';
import './Board.css';

class Board extends Component {

  render() {
    let { actions, board, activeSquare, viewingIndex, isPlayable } = this.props;

    console.log('board props', this.props);

    // TODO fix this
    // if (board.board) {
    //   console.log('weird board thing');
    //   board = board.board;
    // }

    let offset = false;
    let n=8;
    const ranks = [...Array(8)].map((_, i) => {
      offset = !offset;
      n--;
      return <Rank key={i}
                   rank={n+1}
                   offset={offset}
                   activeSquare={activeSquare}
                   board={board}
                   actions={actions}
                   isPlayable={isPlayable}/>
    });

    return (
      <div className="board">
        {ranks}
      </div>
    );
  }
}

export default Board;