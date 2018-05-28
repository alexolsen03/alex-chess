import React, { Component } from 'react';
import logo from './logo.svg';
import { Board } from './components';
import * as SquareActions from './actions/SquareActionCreator';
import * as BoardActions from './actions/BoardActionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.props.actions.boardActions.initializeBoard();
  }

  resetBoard = () => {
    this.props.actions.boardActions.initializeBoard();
  }

  rewind = () => {
    if (this.props.board.viewingIndex >= 0) {
      this.props.actions.boardActions.rewind();
    }
  }

  replay = () => {
    const { viewingIndex, states } = this.props.board;
    // plus 1 on viewing index to see if the next index exists
    if (viewingIndex + 1 <= (states.length - 1)) {
      const isPlayable = states.length - 1 === viewingIndex + 1;

      this.props.actions.boardActions.replay(isPlayable);
    }
  }

  disableRewind = () => {
    return this.props.board.viewingIndex <= 0;
  }

  disableReplay = () => {
    return (this.props.board.states.length - 1) <= this.props.board.viewingIndex;
  }

  render() {
    let { actions, board, activeSquare, viewingIndex } = this.props;
    let isPlayable = board.isPlayable;

    // TODO fix this
    if (board.board) {
      board = board.board;
    }

    let size = this.props.board.states.length;
    const revStates = [...this.props.board.states].reverse();

    const history = [...Array(5)].map((_, i) => {
      if (revStates.length === 0 || !revStates[i]) {
        return;
      }

      return <Board board={revStates[i]}
               key={i}
               activeSquare=''
               viewingIndex={0}
               isPlayable={false}
               actions={null} />
    });

    console.log(history);

    return (
      <div className="App container">
        <div className="row">
          <div className="col col-sm-8">
            <div className="main-board">
              <Board board={board}
                     activeSquare={activeSquare}
                     viewingIndex={viewingIndex}
                     isPlayable={isPlayable}
                     actions={actions}/>
            </div>
          </div>
          <div className="col col-sm-4">
            <div className="history-board">
              {history}
            </div>
          </div>
        </div>
        <br />
        <button disabled={this.disableRewind()} onClick={this.rewind}>Rewind</button>
        <button onClick={this.resetBoard}>Reset</button>
        <button disabled={this.disableReplay()} onClick={this.replay}>Replay</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    activeSquare: state.squares.activeSquare,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      squareActions: bindActionCreators(SquareActions, dispatch),
      boardActions: bindActionCreators(BoardActions, dispatch),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
