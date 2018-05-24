import React, { Component } from 'react';
import logo from './logo.svg';
import { Rank } from './components';
import './App.css';

class App extends Component {



  render() {

    let offset = false;
    const ranks = [...Array(8)].map((_, i) => {
      offset = !offset;
      return <Rank key={i} rank={i+1} offset={offset}/>
    })

    return (
      <div className="App">
        {ranks}
      </div>
    );
  }
}

export default App;
