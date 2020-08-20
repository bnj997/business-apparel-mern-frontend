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

      {!auth.token && (
        <NavLink to="/login" style={{textDecoration: "none", color: "white"}}>My Account</NavLink>
      )}
      {auth.token && auth.username === "adminstaff" && (
        <NavLink to="/admin/garments" style={{textDecoration: "none",  color: "white"}}>{auth.username}</NavLink>
      )}

      {auth.token && auth.username !== "adminstaff" && (
        <NavLink to={`/user/${auth.username}`} style={{textDecoration: "none",  color: "white"}}>{auth.username}</NavLink>
      )}  

      <p style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}> | </p>
      <ShoppingCartIcon style={{marginRight: "0.5rem"}}  />
      <p>: 0 </p>
    </div>

  );
}
export default MyAccount;
