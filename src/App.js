import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ContentContainer from './components/ContentContainer';

// import database from '../src/components/Firebase/firebase'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import NavBar from './components/NavBar'


import Landing from './components/Landing';
import Healthy from './components/Healthy';
import Affordable from './components/Affordable';
import Fair from './components/Fair';
import Sustainable from './components/Sustainable';
// import * as data from './constants/fair-json';
import * as ROUTES from './constants/routes';

// import * as data from './constants/sustainable-json';


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

        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.HEALTHY} component={Healthy} />
        <Route exact path={ROUTES.AFFORDABLE} component={Affordable} />
        <Route exact path={ROUTES.FAIR} component={Fair} />
        <Route exact path={ROUTES.SUSTAINABLE} component={Sustainable} />

        
        GoodFoodForAll
        {text.map((t)=> 
          <ContentContainer displayText={t} bodyText={t} key={t.id}/>
        )}
        <Footer />
      </div>
    );
  }
}


export default App;
