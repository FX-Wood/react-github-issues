import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link as A } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import SplashPage from './SplashPage';
import SplashButton from './SplashButton';
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
    axios.get('https://api.github.com/orgs/facebook/repos?per_page=100')
    .then(res => console.log('repos', res.data))
  }
  
  render() {
    console.log('rendering app')
    console.log('state', this.state)
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path='/' component={SplashPage} />
          <Route exact path='/' component={SplashButton} />
          <Route exact path='/issues' render={ () => <IssueIndex issues={this.state.issues} />} />
          <Route path='/issues/:id' render={ () => <IssueShow issues={this.state.issues} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
