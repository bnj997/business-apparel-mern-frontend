import React from 'react';

import './SecondaryHeader.css';

const SecondaryHeader = props => {
  return (
    <header className="second-header">
      {props.children}
    </header>
  );
}

export default SecondaryHeader;
