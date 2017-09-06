import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchTest1 from './container/search-test1';
import SearchTest2 from './container/search-test2';
import FetchApiTest1 from './container/fetch-test1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchTest1 />
        <SearchTest2 />
        <FetchApiTest1 />
      </div>
    );
  }
}

export default App;
