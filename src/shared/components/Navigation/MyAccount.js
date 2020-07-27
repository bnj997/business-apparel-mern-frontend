import React from 'react';

import './MyAccount.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const MyAccount = props => {
  return (
    <div className={`${props.drawerIsOpen ? 'header-drawer' : 'header'}`}>
      <AccountCircleIcon style={{marginRight: "0.5rem"}} />
      <p> My Account </p>
      <p style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}> | </p>
      <ShoppingCartIcon style={{marginRight: "0.5rem"}}  />
      <p>: 0 </p>
    </div>

  );
}
export default MyAccount;
