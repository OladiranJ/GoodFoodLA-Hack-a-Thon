import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import NavBar from './components/NavBar'

import Healthy from './components/Healthy';
import Affordable from './components/Affordable';
import Fair from './components/Fair';
import Sustainable from './components/Sustainable'
import RegionMap from './components/RegionMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Healthy />
        <Sustainable />
        <Affordable />
        <Fair />
        <RegionMap />
        <Footer />
      </div>
    );
  }
}


export default App;
