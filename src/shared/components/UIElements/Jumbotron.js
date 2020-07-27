import React from 'react';

import './Jumbotron.css';
import slide1 from '../../../images/banner13.jpg';


const Jumbotron = props => {
  return (
    <React.Fragment>
      <div style={{background:`url(${slide1})`, backgroundSize: "cover"}}>
        <div className="jumbotron-content">
          <h1> {props.heading} </h1>
          <h2> {props.text}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Jumbotron;
