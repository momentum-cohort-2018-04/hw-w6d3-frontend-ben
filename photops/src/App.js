import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import logo from '/logo.png';
import jquery from 'jQuery';


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
          <div className="App-logo">${logo}</div>
          <div class="input-group">
              <input type="text"/>
              <button type="button" class="button-light">Search</button>
          </div>
        </header>
        <p className="App-results">

        </p>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
