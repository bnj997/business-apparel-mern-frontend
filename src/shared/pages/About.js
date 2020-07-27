import React from 'react';
import Jumbotron from '../components/UIElements/Jumbotron';

const About = () => {
  return (
    <React.Fragment>
      <Jumbotron 
        heading="About Us" 
        text="Learn more about our history and services"
      />
    </React.Fragment>
  );
};

export default About;