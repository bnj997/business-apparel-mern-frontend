import React, {Suspense, lazy, useState, useCallback, useEffect} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';


import { AuthContext } from './shared/context/auth-context';
import ThisHQ from './admin/pages/ThisHQ'
import Headquarters from './admin/pages/Headquarters'

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(false)
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [username, setUsername] = useState(false);

  const login = useCallback((uid, username, token, expirationDate) => {
    setUserId(uid);
    setUsername(username);
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData', 
      JSON.stringify({
        userId: uid, 
        username: username, 
        token: token, 
        expiration: tokenExpirationDate.toISOString()}))
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setUsername(null);
    localStorage.removeItem('userData');
  }, []);


  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime )
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate])


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData && 
      storedData.token && 
      new Date(storedData.expiration) > new Date() 
    ) {
      login(storedData.userId, storedData.token, storedData.username,  new Date(storedData.expiration));
    }
  }, [login])


  let routes;

  const Home = lazy(() => import('./shared/pages/Home'));
  const About = lazy(() => import('./shared/pages/About'));
  const Team = lazy(() => import('./shared/pages/Team'));
  const Contact = lazy(() => import('./shared/pages/Contact'));
  const Garments = lazy(() => import('./admin/pages/Garments'));

  const Authentication = lazy(() => import('./shared/pages/Authentication'));

  if (token && username === "adminstaff") {
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
  } else if (token) {
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

        <Route path="/:userId/catalogue" component={Garments} exact> 
          <Garments />
        </Route>
        <Route path="/:userId/cart" exact> 
          <Headquarters />
        </Route>
        <Route path="/:userId/orders" exact> 
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
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        username: username,
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
