import React from 'react';

import './TextSection.css';


const TextSection = props => {
  const color = props.color
  return (
    <div className="section" style={{backgroundColor: `${color}`}}>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default TextSection;
