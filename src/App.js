import React, {Suspense} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';


import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/components/hooks/auth-hook';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const Home = React.lazy(() => import('./shared/pages/Home'));
const About =  React.lazy(() => import('./shared/pages/About'));
const Team =  React.lazy(() => import('./shared/pages/Team'));
const Contact =  React.lazy(() => import('./shared/pages/Contact'));

const Garments =  React.lazy(() => import('./admin/pages/Garments'));
const Headquarters =  React.lazy(() => import('./admin/pages/Headquarters'));
const Orders =  React.lazy(() => import('./admin/pages/Orders'));
const ThisHQ =  React.lazy(() => import('./admin/pages/ThisHQ'));
const ThisOrder =  React.lazy(() => import('./admin/pages/ThisOrder'));

const ClientOrders =  React.lazy(() => import('./clients/pages/ClientOrders'));
const ClientCatalogue =  React.lazy(() => import('./clients/pages/ClientCatalogue'));
const ClientCart =  React.lazy(() => import('./clients/pages/ClientCart'));
const ThisClientOrder =  React.lazy(() => import('./clients/pages/ThisClientOrder'));
// import ClientOrders from './clients/pages/ClientOrders'
// import ClientCatalogue from './clients/pages/ClientOrders'
// import ClientCart from './clients/pages/ClientOrders'
// import ThisClientOrder from './clients/pages/ClientOrders'

const Authentication =  React.lazy(() => import('./shared/pages/Authentication'));


const App = () => {
  const {token, login, logout, userId, username,} = useAuth();

  let routes;

  if (token && username === "adminstaff") {
    routes = (
      <Switch>
         <Route path="/" exact> 
          <Home />
        </Route>
        <Route path="/about" exact> 
          <About />
        </Route>
        <Route path="/team"  exact> 
          <Team />
        </Route>
        <Route path="/contact" exact> 
          <Contact />
        </Route>

        <Route path="/admin/orders" exact> 
          <Orders />
        </Route>
        <Route path="/admin/garments"  exact> 
          <Garments />
        </Route>
        <Route path="/admin/headquarters" exact> 
          <Headquarters />
        </Route>
        <Route path="/admin/headquarters/:hqId"  exact> 
          <ThisHQ />
        </Route>
        <Route path="/admin/orders/:oid" exact> 
          <ThisOrder />
        </Route>

      </Switch>
    );  
  } else if (token && username !== "adminstaff") {
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

      <Route path="/:userId/catalogue" exact> 
        <ClientCatalogue />
      </Route>
      <Route path="/:userId/checkout" exact> 
        <ClientCart />
      </Route>
      <Route path="/:userId/orders" exact> 
        <ClientOrders />
      </Route>
      <Route path="/:userId/orders/:oid" exact> 
        <ThisClientOrder />
      </Route>


      <Redirect to="/" component={Home} />
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
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        username: username,
        login: login, 
        logout: logout
      }}
    >
      <Router>
        <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
          {routes}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
