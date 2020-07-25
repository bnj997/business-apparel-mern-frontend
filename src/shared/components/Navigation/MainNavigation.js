import React, { useState } from 'react';

import MainHeader from './MainHeader';
import SecondaryHeader from './SecondaryHeader';
import NavLinks from './NavLinks';
import Login from './Login';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import Logo from '../UIElements/Logo';
import './MainNavigation.css';



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
          <Logo width="150" height="150" drawerIsOpen={drawerIsOpen}/>
          <NavLinks drawerIsOpen={drawerIsOpen} />
          <Login />
        </nav>
      </SideDrawer>
      <SecondaryHeader>
        <p> orders@businessapparel.com</p>
        <p> My Account | C:  0 </p>
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