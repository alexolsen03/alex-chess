import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Square } from './../';
import * as styles from './Rank.css';
import * as SquareActions from './../../actions/SquareActionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Rank extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { offset, rank, activeSquare, actions } = this.props;

    const fileMap = { 1: 'a', 2: 'b', 3: 'c', 4: 'd',
                      5: 'e', 6: 'f', 7: 'g', 8: 'h'};

    const spaceCt = 8;
    const squares = [...Array(spaceCt)].map((_, i) => {
      const file = fileMap[i + 1];
      const coord = `${file}${rank}`;
      const piece = this.props.board[coord];

      return <Square key={i}
                    isBlack={i % 2 ? offset : !offset}
                    isActive={coord === activeSquare}
                    occupier={piece}
                    rank={rank}
                    file={file}
                    actions={actions}/>
    });

    return (
      <div className="rank">
        {squares}
      </div>
    );
  }
}

Rank.propTypes = {
  rank: PropTypes.isRequired,
  offset: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    board: state.squares.board,
    activeSquare: state.squares.activeSquare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(SquareActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);
