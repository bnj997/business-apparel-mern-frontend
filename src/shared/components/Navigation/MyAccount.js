import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './MyAccount.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const MyAccount = props => {

  const auth = useContext(AuthContext);

  return (
    <div className={`${props.drawerIsOpen ? 'header-drawer' : 'header'}`}>
      <AccountCircleIcon style={{marginRight: "0.5rem"}} />

      {!auth.isLoggedIn && (
        <NavLink to="/login" style={{textDecoration: "none", color: "white"}}>My Account</NavLink>
      )}
      {auth.isLoggedIn && (
        <NavLink to="/admin/garments" style={{textDecoration: "none",  color: "white"}}>User Name</NavLink>
      )}

      <p style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}> | </p>
      <ShoppingCartIcon style={{marginRight: "0.5rem"}}  />
      <p>: 0 </p>
    </div>

  );
}
export default MyAccount;
