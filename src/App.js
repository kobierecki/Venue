import React, { Component } from 'react';
import './resources/resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured/index';
import VenueInfo from  './components/venue_info/index';
import Highlights from './components/highlights/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Featured></Featured>
          <VenueInfo></VenueInfo>
          <Highlights></Highlights>
      </div>
    );
  }
}

export default App;
