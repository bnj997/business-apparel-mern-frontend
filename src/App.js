import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './shared/pages/Home';
import About from './shared/pages/About';
import Clients from './shared/pages/Clients';
import Services from './shared/pages/Services';
import Contact from './shared/pages/Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact> 
          <Home />
        </Route>
        <Route path="/about" exact> 
          <About />
        </Route>
        <Route path="/clients" exact> 
          <Clients />
        </Route>
        <Route path="/services" exact> 
          <Services />
        </Route>
        <Route path="/contact" exact> 
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
