import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Square } from './../';
import * as styles from './Rank.css';

class Rank extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const actions = this.props.actions;

    let { offset, rank } = this.props;

    const spaceCt = 8;
    const squares = [...Array(spaceCt)].map((_, i) => {
      return <Square key={i}
                    isBlack={i % 2 ? offset : !offset}
                    isLeft={i==0}
                    isRight={i==spaceCt - 1}
                    isTop={rank == "1"}
                    isBtm={rank == "8"}
             />
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

export default Rank;
