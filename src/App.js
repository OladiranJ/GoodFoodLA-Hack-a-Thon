import React, { Component } from 'react';

import './App.css';
import database from '../src/components/Firebase/firebase'

import NavBar from './components/NavBar'


class App extends Component {
  componentDidMount(){
    database.collection('users').doc().set({
      email: 'asdfasdfsd', 
      username: 'asdfasdfasd'
  })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        Hello World
      </div>
    );
  }
}

export default App;
