import React from 'react';

import FooterCard from '../UIElements/FooterCard';
import NavLinks from './NavLinks';
import './MainFooter.css';
import { NavLink } from 'react-router-dom';

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
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
      </FooterCard>
      
      <FooterCard >
        <h2> Enquire Now </h2>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
        <p> dsjfksdjfklsdjfkldsjfkdslfjkdls </p>
      </FooterCard>
    </div>
  );
};

export default MainFooter;
