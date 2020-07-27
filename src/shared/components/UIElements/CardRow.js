import React from 'react';

import Grow from '@material-ui/core/Grow';
import './CardRow.css';

const CardRow= props => {
  return (
    <div className="card-row">
      {props.children}
    </div>
  );
};

export default CardRow;