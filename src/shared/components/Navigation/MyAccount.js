import React from 'react';

import './MyAccount.css';

const MyAccount = props => {
  return (
    <React.Fragment>
      <p className={`header ${props.drawerIsOpen && 'header-drawer'}`}> My Account | C:  0 </p>
    </React.Fragment>
  );
}

export default MyAccount;
