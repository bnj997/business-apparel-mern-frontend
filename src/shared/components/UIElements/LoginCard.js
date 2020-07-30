import React from 'react';

import './LoginCard.css';

const LoginCard = props => {
  return (
    <div className={`logincard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default LoginCard;
