import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <ul>
            <li>Git Logo</li>
            <li>Search Bar</li>
            <li>Pull Requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </nav>
        <div className="splash">
          <h2>Want to submit an issue to bookface/actre</h2>
          <p>If you have a bug or an idea, read the contributing guidelines before opening an issue. Issues labeled good first issue can be good first contributions</p>
          <button>Go to Issues</button>
        </div>
        <div className="index">
          <h2>Number of issues</h2>
          <ul>
            <li className="index-issue">
              <h3>Issue title</h3>
              <i> number of likes icon</i>
              <p>open or closed indicator <span><em>amount of time the issue has been open</em></span></p>
            </li>
          </ul>
        </div>
        <div className="show">
          <h1>Issue Title</h1>
          <h2>Issue number</h2>
          <p>open status indicator <span><em>amount of time issue has been open</em></span></p>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
