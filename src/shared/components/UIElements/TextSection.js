import React from 'react';

import './TextSection.css';


const TextSection = props => {
  const color = props.color
  return (
    <div className="section" style={{backgroundColor: `${color}`}}>
      <div className={`alignment-${props.type} content`}>
        {props.children}
      </div>
    </div>
  );
};

export default TextSection;
