import React, { Component } from 'react';
import Sidenav from './component/Navbar';
import Projects from './component/Projects';
import './Style/App.css';

class App extends Component {
  render() {

    return (
      <div className="App" >
        <Sidenav />
        <Projects />
      </div>
    );
  }
}

export default App;
