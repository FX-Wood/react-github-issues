import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SplashPage from './SplashPage';
import IssueIndex from './IssueIndex';

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
        <div className="show">
          <h1>Issue Title</h1>
          <h2>Issue number</h2>
          <p>open status indicator <span><em>amount of time issue has been open</em></span></p>
          <hr/>
          <img src="http://via.placeholderimg/80" alt="user image"/>
          <div>
            <h2>Parsed markdown</h2>
            <p>asdklfjl;kasdjfl;kasdjflkasjdf asdjlfkasj dlkfj aslkdf jaslkdjf alksdjfasdj flk;asdj fals;djf l;aksdjf laksdjfhiuqeo;fjasd;klf jasf iqae jflask;jdf ;asdfj ak;sdjhfkjasdhglasdfj asdf lkasjf sak</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
