import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';

import Home from './shared/pages/Home';
import About from './shared/pages/About';
import Team from './shared/pages/Team';
import Contact from './shared/pages/Contact';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/Navigation/MainFooter';
import SecondaryFooter from './shared/components/Navigation/SecondaryFooter';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact> 
            <Home />
          </Route>
          <Route path="/about" exact> 
            <About />
          </Route>
          <Route path="/team" exact> 
            <Team />
          </Route>
          <Route path="/contact" exact> 
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <MainFooter />
      <SecondaryFooter />
    </Router>
  );
}

export default App;
