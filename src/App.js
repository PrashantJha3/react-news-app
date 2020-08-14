import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">

          <div className="title">
            <h1>React News App</h1>
          </div>
        </div>
        <Search default="bbc-news" />
       
      </div>
    );
  }
}

export default App;
