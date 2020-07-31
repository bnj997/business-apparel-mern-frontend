import React from 'react';

import './MainHeader.css';

const Mainheader = props => {
  return (
    <header className="main-header main">
      {props.children}
    </header>
  );
}

export default Mainheader;
