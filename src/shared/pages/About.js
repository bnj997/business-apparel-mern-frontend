import React from 'react';

import MainNavigation from '../components/Navigation/MainNavigation';
import MainFooter from '../components/Navigation/MainFooter';
import SecondaryFooter from '../components/Navigation/SecondaryFooter';

import Jumbotron from '../components/UIElements/Jumbotron';
import TextSection from '../components/UIElements/TextSection';
import MediumButton from '../components/FormElements/MediumButton'
import CardRow from '../components/UIElements/CardRow';
import Slider from '../components/UIElements/Slider';

import { useAboutData } from '../PageData/About';

const About = () => {
  const {bannerSection, tomSection, valueIntro, valueCard, testimonialIntro, testimonialCard } = useAboutData();
  return (
    <React.Fragment>
      <MainNavigation />
      <Jumbotron 
        heading={bannerSection.heading}
        text={bannerSection.description}
      />
      <TextSection type="half-half normal">
        <div>
          <h1>{tomSection.heading}</h1>
          <p>{tomSection.description}</p>
          <MediumButton to="/team" > Our Team </MediumButton>
        </div>
        <div>
          <img src={tomSection.image} alt="tom" /> 
        </div>
      </TextSection>
      <TextSection type="center inverse" color="#323133">
        <h1>{valueIntro.heading}</h1>
        <p>{valueIntro.description}</p>
        <CardRow content={valueCard} type="value" ></CardRow>
      </TextSection>
      <TextSection type="center normal" >
        <h1>{testimonialIntro.heading}</h1>
        <p>{testimonialIntro.description}</p>
        <Slider content={testimonialCard}></Slider> 
      </TextSection>
      <MainFooter />
      <SecondaryFooter />
    </React.Fragment>
  );
};

export default About;