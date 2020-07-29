import React from 'react';

import FooterCard from '../UIElements/FooterCard';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import NavLinks from './NavLinks';
import './MainFooter.css';
import EnquiryForm from '../FormElements/EnquiryForm';


const MainFooter = () => {
  return (
    <div className="footer">
      <FooterCard >
        <h2> Business Apparel </h2>
        <p> Business Apparel is a focussed whole of the client service business for the SMB and / or corporate sector who want quality in business apparel and exceptional service. We help in the design, production and delivery of any business apparel a client may require.</p>
      </FooterCard>

      <FooterCard >
        <h2> Useful Links </h2>
        <NavLinks mode="footerMode"/>
      </FooterCard>

      <FooterCard >
        <h2>Get in Touch </h2>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <MailIcon />
          <p style={{marginLeft: "1rem"}}> info@businessapparel.com </p>
        </div>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <PhoneIcon />
          <p style={{marginLeft: "1rem"}}> +61400 000 000 </p>
        </div>
      </FooterCard>
      
      <FooterCard >
        <h2> Enquire Now </h2>
        <EnquiryForm type="filled" button="white" />
      </FooterCard>
    </div >
  );
};

export default MainFooter;
