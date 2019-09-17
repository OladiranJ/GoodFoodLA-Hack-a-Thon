import React, { Component } from 'react';

import './App.css';

import ContentContainer from './components/ContentContainer';

import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'
import NavBar from './components/NavBar'
import * as data from './constants/sustainable-json';

import { text } from './Data';

class App extends Component {
  componentDidMount(){
    
    // -------------------use this to Seed DB--------------------------
    // data.sustainableJSON.map(x => {
    //   database.collection('sustainable').doc().set({
    //     x
    //   })
    // })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        
        GoodFoodForAll
        {text.map((t)=> 
          <ContentContainer displayText={t} bodyText={t} key={t.id}/>
        )}
      </div>
    );
  }
}


export default App;
