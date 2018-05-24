import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Square.css';
import { Piece } from './../'

class Square extends Component {
  render() {

    let { isBlack, occupier } = this.props;

    const actions = this.props.actions;

    return (
      <div className={`square ${isBlack ? 'black' : ''}`}>
        { occupier && <Piece piece={occupier}/> }
      </div>
    );
  }
}

Square.propTypes = {
  isBlack: PropTypes.bool,
  occupier: PropTypes.string,
  rank: PropTypes.string,
  file: PropTypes.number 
}

Square.defaultProps = {
  isBlack: false,
};

export default Square;
