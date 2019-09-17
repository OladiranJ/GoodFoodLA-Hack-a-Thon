import React, { Component } from 'react';

import './App.css';

import database from '../src/components/Firebase/firebase';
import ContentContainer from './components/ContentContainer';

import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'
import NavBar from './components/NavBar'


import { text } from './Data';

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
        <NavBar />
        GoodFoodForAll
        {text.map(t => 
          <ContentContainer displayText={t.displayText} bodyText={t.bodyText} key={t.id}/>
        )}
      </div>
    );
  }
}

export default App;
