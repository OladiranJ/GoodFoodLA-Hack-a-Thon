import React, { Component } from 'react';

import './App.css';
import database from '../src/components/Firebase/firebase';
import ContentContainer from './components/ContentContainer';


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
        Hello World
        <ContentContainer />
      </div>
    );
  }
}

export default App;
