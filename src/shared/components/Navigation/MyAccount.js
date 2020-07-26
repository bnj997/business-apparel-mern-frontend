import React from 'react';

import './MyAccount.css';

const MyAccount = props => {
  return (
    <React.Fragment>
      <p className={`${props.drawerIsOpen ? 'header-drawer' : 'header'}`}> My Account | C:  0 </p>
    </React.Fragment>
  );
}

export default MyAccount;
