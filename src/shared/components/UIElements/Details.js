import React from 'react';

import './Details.css';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


const Details = props => {
  return (
    <div className="detail-section">
      <div>
        <MailIcon />
        <p> info@businessapparel.com </p>
      </div>
      <div>
        <PhoneIcon />
        <p> +61400 000 000 </p>
      </div>
      <div>
        <AccessTimeIcon style={{marginBottom: "3rem"}}/>
        <section>
          <p> Weekdays: 9am - 6pm </p>
          <p> Saturday: 9am - 2pm </p>
        </section>
      </div>
    </div>  
  );
};

export default Details;
