import React, { Component } from 'react';

import './App.css';
import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'


class App extends Component {
  // componentDidMount(){
  //   database.collection('users').doc().set({
  //     email: 'asdfasdfsd', 
  //     username: 'asdfasdfasd'
  // })
  // }
  render() {
    return (
      
      <div className="App">
        <Header />
        Hello World
      </div>
    );
  }
}

export default App;
