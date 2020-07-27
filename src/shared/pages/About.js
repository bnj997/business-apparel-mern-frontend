import React from 'react';
import Jumbotron from '../components/UIElements/Jumbotron';
import TextSection from '../components/UIElements/TextSection';

const About = () => {
  return (
    <React.Fragment>
      <Jumbotron 
        heading="About Us" 
        text="Learn more about our history and services"
      />
      <TextSection />
    </React.Fragment>
  );
};

export default About;