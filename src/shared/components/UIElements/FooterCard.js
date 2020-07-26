import React from 'react';

import './FooterCard.css';

const FooterCard = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default FooterCard;
