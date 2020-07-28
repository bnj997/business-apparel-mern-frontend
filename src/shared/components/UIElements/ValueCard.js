import React from 'react';

import Icon from '@material-ui/core/Icon';
import './ValueCard.css';


const ValueCard = props => {
  return (
    <div className="value-card">
      <Icon>{props.icon}</Icon>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>  
  );
};

export default ValueCard;
