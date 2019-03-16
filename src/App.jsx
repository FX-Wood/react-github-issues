import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SplashPage from './SplashPage';
import IssueIndex from './IssueIndex';
import IssueShow from './IssueShow';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issues: []
    }
  }
  
  componentDidMount() {
    console.log('component did mount')
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => this.setState({issues: res.data}))
  }
  
  render() {
    console.log('rendering app')
    console.log('state', this.state)
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
        <SplashPage />
        <IssueIndex />
        <IssueShow />
      </div>
    );
  }
}

export default App;
