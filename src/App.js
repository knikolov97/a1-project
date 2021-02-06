import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import React from "react";
import LaunchDetails from "./components/pages/LaunchDetails";

function App() {
  return (
      <>
          <Router>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path={"/launch/:id"} component={LaunchDetails}/>
              </Switch>
          </Router>
      </>
  );
}

export default App;
