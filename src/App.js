import React, { Component } from 'react';
import './resources/resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured/index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '2000px', background: 'cornflowerblue'}}>
          <Header></Header>
          <Featured></Featured>
      </div>
    );
  }
}

export default App;
