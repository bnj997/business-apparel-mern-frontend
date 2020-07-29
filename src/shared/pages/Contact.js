import React from 'react';

import Jumbotron from '../components/UIElements/Jumbotron';
import Details from '../components/UIElements/Details';
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
          <Details />
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