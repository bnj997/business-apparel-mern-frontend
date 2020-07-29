import React from 'react';

import './TeamCard.css';


const TeamCard = props => {
  return (
    <div className="team-card">
      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <img src={props.imageURL} alt={props.name}/>
      <p>{props.description}</p>
    </div>  
  );
};

export default TeamCard;
