import React, { Component } from 'react';
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
    let { actions, board, activeSquare } = this.props;
    let { isPlayable, viewingIndex } = board;

    // TODO fix this
    if (board.board) {
      board = board.board;
    }

    let size = this.props.board.states.length;
    const revStates = [...this.props.board.states].reverse();

    const history = [...Array(3)].map((_, i) => {
      if (revStates.length === 0 || !revStates[i]) {
        return null;
      }

      let reversedIndex = Math.abs(viewingIndex - size);

      return <div key={i} className={i + 1 === reversedIndex ? 'viewing' : ''}>
                <Board board={revStates[i]}
                   key={i}
                   activeSquare=''
                   viewingIndex={0}
                   isPlayable={false}
                   actions={null} />
             </div>
    });

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
        <button onClick={this.rewind} disabled={this.disableRewind()} >Rewind</button>
        <button onClick={this.resetBoard}>Reset</button>
        <button onClick={this.replay} disabled={this.disableReplay()}>Replay</button>
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
