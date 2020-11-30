import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/accueil';
import Covoit from './pages/covoit';
import Reservation from './pages/hebergement';
import About from './pages/ambiance';

function App() {
  return (
    <div className="App">
      <Router>
        <div class="body">
          <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <h1>
                  <Link to="/" class="nav-link">Accueil</Link>
                </h1>
              </li>
              <li class="nav-item active">
                <h1>
                  <Link to="/covoit" class="nav-link" >Covoiturage</Link>
                </h1>
              </li>
              <li class="nav-item active">
                <h1>
                  <Link to="/hebergement" class="nav-link">Hébergement</Link>
                </h1>
              </li>
              <li class="nav-item active">
                <h1>
                  <Link to="/ambiance" class="nav-link">Ambiance</Link>
                </h1>
              </li>
            </ul>
          </nav>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/covoit">
              <Covoit />
            </Route>
            <Route path="/hebergement">
              <Reservation />
            </Route>
            <Route path="/ambiance">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
