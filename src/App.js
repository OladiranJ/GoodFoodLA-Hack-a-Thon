import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ContentContainer from './components/ContentContainer';

import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'
import NavBar from './components/NavBar'
import DataGrid from './components/DataGrid';
import Landing from './components/Landing';
import Healthy from './components/Healthy';
import Affordable from './components/Affordable';
import Fair from './components/Fair';
import Sustainable from './components/Sustainable';
import * as data from './constants/fair-json';
import * as ROUTES from './constants/routes';

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
        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.HEALTHY} component={Healthy} />
        <Route path={ROUTES.AFFORDABLE} component={Affordable} />
        <Route path={ROUTES.FAIR} component={Fair} />
        <Route path={ROUTES.SUSTAINABLE} component={Sustainable} />
        {/* <DataGrid /> */}
        
        {/* GoodFoodForAll
        {text.map(t => 
          <ContentContainer displayText={t.displayText} bodyText={t.bodyText} key={t.id}/>
        )} */}
      </div>
    );
  }
}


export default App;
