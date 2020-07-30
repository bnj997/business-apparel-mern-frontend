import React from 'react';

import FooterCard from '../UIElements/FooterCard';
import Details from '../UIElements/Details';
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
        <Details />
      </FooterCard>
      
      <FooterCard >
        <h2> Enquire Now </h2>
        <EnquiryForm type="filled" button="black" />
      </FooterCard>
    </div >
  );
};

export default MainFooter;
