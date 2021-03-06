import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import React from "react";
import LaunchDetails from "./components/pages/LaunchDetails";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
          <Router>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/page/:page" component={Home} />
                  <Route path={"/launch/:id"} component={LaunchDetails} />
              </Switch>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
