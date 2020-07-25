import React from 'react';
import { NavLink } from 'react-router-dom';

import './Login.css';
import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links login" >
      <li>
        <NavLink to="/" exact> LOGIN </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;