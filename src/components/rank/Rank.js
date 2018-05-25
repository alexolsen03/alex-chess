import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Square } from './../';
import * as styles from './Rank.css';

class Rank extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { offset, rank, activeSquare, actions, board } = this.props;

    const fileMap = { 1: 'a', 2: 'b', 3: 'c', 4: 'd',
                      5: 'e', 6: 'f', 7: 'g', 8: 'h'};

    const spaceCt = 8;
    const squares = [...Array(spaceCt)].map((_, i) => {
      const file = fileMap[i + 1];
      const coord = `${file}${rank}`;
      const piece = board[coord];

      return <Square key={i}
                    isBlack={i % 2 ? offset : !offset}
                    isActive={coord === activeSquare}
                    occupier={piece}
                    rank={rank}
                    file={file}
                    board={board}
                    activeSquare={activeSquare}
                    actions={actions}/>
    });

    return (
      <div className="rank">
        {squares}
      </div>
    );
  }
}

export default Rank;
