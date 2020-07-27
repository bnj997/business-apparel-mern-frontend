import React from 'react';

import './CardRow.css';

const CardRow= props => {
  return (
    <div className="card-row">
      {props.children}
    </div>
  );
};

export default CardRow;