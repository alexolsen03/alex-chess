import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Square } from './../';
import * as styles from './Rank.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Rank extends Component {

  constructor(props) {
    super(props);

    console.log('rank props', props);
  }

  render() {
    const actions = this.props.actions;

    let { offset, rank } = this.props;

    const spaceCt = 8;
    const squares = [...Array(spaceCt)].map((_, i) => {
      return <Square key={i}
                    isBlack={i % 2 ? offset : !offset}
                    occupier="bB"
                    rank={rank}
                    file={i + 1} />
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
  console.log(state);
  return {
    board: state.board
  };
};

export default connect(mapStateToProps)(Rank);
