import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong className="App-title">Photops</strong>
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
