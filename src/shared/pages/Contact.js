import React from 'react';

import Jumbotron from '../components/UIElements/Jumbotron';


import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TextSection from '../components/UIElements/TextSection';
import EnquiryForm from '../components/FormElements/EnquiryForm';



const Contact = () => {
  return (
    <React.Fragment>
      <Jumbotron 
        heading="Contact Us" 
        text="We are happy to help! Just contact Tom!"
      />
      <TextSection type="half-half normal" color="#F5F5F5">
        <div>
          <h1> Our Details </h1>
          <div style={{display: 'flex',alignItems: 'center'}}>
            <MailIcon />
            <p style={{marginLeft: "1rem", paddingBottom: "0rem"}}> info@businessapparel.com </p>
          </div>
          <div style={{display: 'flex',alignItems: 'center'}}>
            <PhoneIcon />
            <p style={{marginLeft: "1rem", paddingBottom: "0rem"}}> +61400 000 000 </p>
          </div>
          <div style={{display: 'flex',alignItems: 'center'}}>
            <AccessTimeIcon style={{marginBottom: "3rem"}}/>
            <div>
              <p style={{marginLeft: "1rem", paddingBottom: "0rem"}}> Weekdays: 9am - 6pm </p>
              <p style={{marginLeft: "1rem", paddingBottom: "0rem"}}> Saturday: 9am - 2pm </p>
            </div>
          </div>
        </div>
        <div>
          <h1> Shoot us a message </h1>
          <EnquiryForm type="outlined" button="black"/>
        </div>
      </TextSection>
    </React.Fragment>
  );
};

export default Contact;