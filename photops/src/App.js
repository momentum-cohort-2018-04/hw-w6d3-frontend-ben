import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import logo from './logo.png';

class App extends Component {
  constructor () {
    super()
    this.state = {
      searchtext : '',
      resultsarray : []
    }
  }

  displayArray(resultsarray, event) {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src={logo}/>
          <div className="input-group">
              <input type="text"/>
              <button type="button" className="button-light">Search</button>
          </div>
        </header>
        <p className="App-results">
          <img className="sample-img" src=''/>
        </p>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
