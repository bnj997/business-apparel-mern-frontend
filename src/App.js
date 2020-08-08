import React, {Suspense, lazy, useState, useCallback} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';


import { AuthContext } from './shared/context/auth-context';
import ThisHQ from './admin/pages/ThisHQ'
import Headquarters from './admin/pages/Headquarters'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  }, [])

  let routes;

  const Home = lazy(() => import('./shared/pages/Home'));
  const About = lazy(() => import('./shared/pages/About'));
  const Team = lazy(() => import('./shared/pages/Team'));
  const Contact = lazy(() => import('./shared/pages/Contact'));
  const Garments = lazy(() => import('./admin/pages/Garments'));

  const Authentication = lazy(() => import('./shared/pages/Authentication'));

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact> 
          <Home />
        </Route>
        <Route path="/about" component={About} exact> 
          <About />
        </Route>
        <Route path="/team" component={Team} exact> 
          <Team />
        </Route>
        <Route path="/contact" component={Contact} exact> 
          <Contact />
        </Route>

        <Route path="/admin/garments" component={Garments} exact> 
          <Garments />
        </Route>
        <Route path="/admin/headquarters" exact> 
          <Headquarters />
        </Route>
        <Route path="/admin/:hqId" exact> 
          <ThisHQ />
        </Route>


        <Redirect to="/" component={Home} />
      </Switch>
    );  
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact> 
          <Home />
        </Route>
        <Route path="/about" component={About} exact> 
          <About />
        </Route>
        <Route path="/team" component={Team} exact> 
          <Team />
        </Route>
        <Route path="/contact" component={Contact} exact> 
          <Contact />
        </Route>
        <Route path="/login" component={Authentication} exact> 
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
        <Suspense fallback={<div>Loading...</div>}>
          {routes}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
