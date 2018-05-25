import React, { Component } from 'react';
import logo from './logo.svg';
import { Rank } from './components';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    let offset = false;
    let n=8;
    const ranks = [...Array(8)].map((_, i) => {
      offset = !offset;
      n--;
      return <Rank key={i} rank={n+1} offset={offset} board={this.props.board}/>
    })

    return (
      <div className="App">
        {ranks}
      </div>
    );
  }
}

export default App;
