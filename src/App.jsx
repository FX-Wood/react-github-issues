import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link as A } from 'react-router-dom';
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
      <Router>
        <div className="App">
          <nav className='nav'>
            <ul>
              <li><A to='/'>Octicon</A></li>
              <li><input type="text" placeholder="Search or jump to..." /></li>
              <li> <A to='/pulls'> Pull Requests </A></li>
              <li><A to='/issues'>Issues</A></li>
              <li><A to='/marketplace'>Marketplace</A></li>
              <li><A to='/explore'>Explore</A></li>
            </ul>
          </nav>
          <Route path='/' component={SplashPage} />
          <Route exact path='/issues' render={ () => <IssueIndex issues={this.state.issues} />} />
          <Route exact path='/issues/:id' component={IssueShow} />
        </div>
      </Router>
    );
  }
}

export default App;
