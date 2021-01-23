import React  from 'react';

import './Details.css';

const Details = props => {
  return (
    <div className="detail-section">
      <div>
        {props.emailIcon}
        <p>{props.email}</p>
      </div>
      <div>
        {props.timeIcon}
        <section>
          <p> {props.openingWeekday}</p>
          <p> {props.openingWeekend} </p>
        </section>
      </div>
    </div>  
  );
};

export default Details;
