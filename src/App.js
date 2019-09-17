import React, { Component } from 'react';

import './App.css';

import ContentContainer from './components/ContentContainer';

import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'
import NavBar from './components/NavBar'
import DataGrid from './components/DataGrid';
import * as data from './constants/fair-json';

import { text } from './Data';

class App extends Component {
  componentDidMount(){
    console.log(data.fairJSON);
    // data.fairJSON.map(x => {
    //   database.collection('fair').doc().set({
    //     x
    //   })
    // })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <DataGrid />
        
        GoodFoodForAll
        {text.map(t => 
          <ContentContainer displayText={t.displayText} bodyText={t.bodyText} key={t.id}/>
        )}
      </div>
    );
  }
}


export default App;
