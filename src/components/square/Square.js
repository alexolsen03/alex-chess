import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Square.css';

class Square extends Component {
  render() {

    let { isBlack, isLeft, isTop, isRight, isBtm } = this.props;

    const actions = this.props.actions;

    return (
      <div className={`square ${isBlack ? 'black' : ''}`}>
      </div>
    );
  }
}

Square.propTypes = {
  isBlack: PropTypes.bool,
}

Square.defaultProps = {
  isBlack: false,
};

export default Square;
