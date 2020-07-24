import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact> HOME </NavLink>
      </li>
      <li>
        <NavLink to="/about"> ABOUT </NavLink>
      </li>
      <li>
        <NavLink to="/clients"> CLIENTS </NavLink>
      </li>
      <li>
        <NavLink to="/services"> SERVICES </NavLink>
      </li>
      <li>
        <NavLink to="/contact"> CONTACT </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
