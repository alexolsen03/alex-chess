import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Square.css';
import { Piece } from './../'

class Square extends Component {
  constructor(props) {
    super(props);
  }

  toggleClass = () => {
    const coord = `${this.props.file}${this.props.rank}`;
    if (this.props.occupier) {
      this.props.actions.setActiveSquare(coord);
    }
  };

  render() {
    let { isBlack, occupier, isActive } = this.props;

    return (
      <div className={`square ${isBlack ? 'black' : ''} ${isActive ? 'active' : ''}`}
           onClick={this.toggleClass}>
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
