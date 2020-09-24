import React from 'react';

import MainNavigation from '../components/Navigation/MainNavigation';
import MainFooter from '../components/Navigation/MainFooter';
import SecondaryFooter from '../components/Navigation/SecondaryFooter';

import Jumbotron from '../components/UIElements/Jumbotron';
import Details from '../components/UIElements/Details';
import TextSection from '../components/UIElements/TextSection';
import EnquiryForm from '../components/FormElements/EnquiryForm';
import { useContactData } from '../PageData/Contact';



const Contact = () => {
  const {bannerSection, detailIntro, detailSection} = useContactData();
  return (
    <React.Fragment>
      <MainNavigation />
      <Jumbotron 
        heading={bannerSection.heading}
        text={bannerSection.description}
      />
      <TextSection type="half-half normal" color="#F5F5F5">
        <div>
          <h1>{detailIntro.heading }</h1>
          <Details {...detailSection}/>
        </div>
        <div>
          <h1> Shoot us a message </h1>
          <EnquiryForm type="outlined" button="black"/>
        </div>
      </TextSection>
      <MainFooter />
      <SecondaryFooter />
    </React.Fragment>
  );
};

export default Contact;