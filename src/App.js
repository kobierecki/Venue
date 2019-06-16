import React, { Component } from 'react';
import './resources/resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/header';
import Featured from './components/featured/index';
import VenueInfo from  './components/venue_info/index';
import Highlights from './components/highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Element name='header'>
              <Header/>
          </Element>
          <Element name='featured'>
              <Featured/>
          </Element>
          <Element name='venue'>
              <VenueInfo/>
          </Element>
          <Element name='highlights'>
              <Highlights/>
          </Element>
          <Element name='pricing'>
              <Pricing/>
          </Element>
          <Element name='location'>
              <Location/>
          </Element>
          <Element name='footer'>
              <Footer/>
          </Element>

      </div>
    );
  }
}

export default App;
