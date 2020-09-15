import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './MyAccount.css';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCart from '../../../clients/UIElements/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: 13,
    padding: '0 6px',
  },
}))(Badge);


const MyAccount = props => {

  const auth = useContext(AuthContext);

  return (
    <div className={`${props.drawerIsOpen ? 'header-drawer' : 'header'}`}>
      <AccountCircleIcon style={{marginRight: "0.5rem"}} />

      {!auth.token && (
        <NavLink to="/login" style={{textDecoration: "none", color: "white"}}>My Account</NavLink>
      )}
      {auth.token && auth.username === "adminstaff" && (
        <NavLink to="/admin/orders" style={{textDecoration: "none",  color: "white"}}>{auth.username}</NavLink>
      )}

      {auth.token && auth.username !== "adminstaff" && (
        <React.Fragment>
          <NavLink to={`/${auth.username}/orders`} style={{textDecoration: "none",  color: "white"}}>{auth.username}</NavLink>
          <p style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}> | </p>
          <NavLink to={`/${auth.username}/checkout`} style={{textDecoration: "none",  color: "white"}}>
            <ShoppingCart userId={auth.userId} />
          </NavLink>
        </React.Fragment>
      )}  
    </div>

  );
}
export default MyAccount;
