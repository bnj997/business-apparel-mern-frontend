import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/BA.jpg';
import './Logo.css';

const Logo = props => {
  return  (
    <Link to="/"> <img src={logo} className={`${props.drawerIsOpen ? 'image-drawer' : 'image'}`} alt="Business Apparel Logo" width={props.width} height={props.height}/></Link>
  )
}


export default Logo;