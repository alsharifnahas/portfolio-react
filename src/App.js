import React from 'react';
import About from './pages/About';
import Projects from './pages/Projects';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './Style/App.css';
import SideNav from './component/SideNav/SideNav';


const App = () => {


  return (
    <div className="App" >

      <Router>
        <SideNav />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>

    </div>
  );

}

export default App;
