import React, { useState } from 'react';

import MainHeader from './MainHeader';
import SecondaryHeader from './SecondaryHeader';
import NavLinks from './NavLinks';
import Login from './Login';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import Logo from '../UIElements/Logo';
import './MainNavigation.css';
import MyAccount from './MyAccount';



const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawer() {
    setDrawerIsOpen(true);
  }

  function closeDrawer() {
    setDrawerIsOpen(false);
  }


  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} /> }
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <Logo drawerIsOpen={drawerIsOpen}/>
          <MyAccount drawerIsOpen={drawerIsOpen} />
          <NavLinks />
          <Login />
        </nav>
      </SideDrawer>
      <SecondaryHeader>
        <p className="email"> info@businessapparel.com.au</p>
        <MyAccount />
      </SecondaryHeader>
      <MainHeader>
        <Logo width="75" height="75"/>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <nav className="main-navigation__header-nav">
          <Login />
        </nav>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span/>
          <span/>
          <span/>
        </button>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;