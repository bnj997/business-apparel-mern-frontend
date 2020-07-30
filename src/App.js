import React, {useState, useCallback} from 'react';
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
import Dashboard from './admin/pages/Dashboard';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/Navigation/MainFooter';
import SecondaryFooter from './shared/components/Navigation/SecondaryFooter';
import Authentication from './shared/pages/Authentication';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  }, [])

  let routes;

  if (isLoggedIn) {
    routes = (
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
        <Route path="/:userId/dashboard" exact> 
          <Dashboard />
        </Route>
        <Redirect to="/" />
      </Switch>
    ); 
  } else {
    routes = (
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
        <Route path="/login" exact> 
          <Authentication />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login, 
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
        <MainFooter />
        <SecondaryFooter />
      </Router>
      
    </AuthContext.Provider>
  );
};

export default App;
