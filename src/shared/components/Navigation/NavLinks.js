import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className={`${props.mode === 'footerMode'? 'nav-links--footerMode' : 'nav-links'}`}>
      <li>
        <NavLink to="/" exact> Home </NavLink>
      </li>
      <li>
        <NavLink to="/about"> About </NavLink>
      </li>
      <li>
        <NavLink to="/team"> Team </NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contact </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
