import React from 'react';

import Jumbotron from '../components/UIElements/Jumbotron';
import TextSection from '../components/UIElements/TextSection';
import MediumButton from '../components/FormElements/MediumButton'
import ValuesRow from '../components/UIElements/ValuesRow';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import TimelineIcon from '@material-ui/icons/Timeline';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Tom from '../../images/Tom.jpg';

const values =  [
  {
    icon: <PeopleAltIcon style={{fontSize: "5vw"}} />,
    heading: "We wow our clients",
    description: "We ensure we are a step above the industry norm and deliver unparalleled service."
  },
  {
    icon: <WorkIcon style={{fontSize: "5vw"}} />,
    heading: "We live and breathe projects",
    description: "No matter the project, we make sure we are part of your success."
  },
  {
    icon: <FavoriteIcon style={{fontSize: "5vw"}} />,
    heading: "We value integrity and quality",
    description: "Our workflow includes no short cuts to ensure we deliver top quality."
  }
];

const About = () => {
  return (
    <React.Fragment>
      <Jumbotron 
        heading="About Us" 
        text="Learn more about our history and services"
      />
      <TextSection type="half-half normal">
        <div>
          <h1> From humble beginnings </h1>
          <p> In the 1980’s, Tom Gilmour came to Australia with his young family from Scotland and could not believe his luck. A country where the sun shone, the children could play for extended hours outdoors and you had limitless opportunity. As a person with solid core values of integrity, honesty and hard work Tom set about creating a new life for his family and giving his children the opportunity to grow and prosper in this great country. Melbourne was the chosen home for its four seasons, sporting and cultural energy and the lifestyle it afforded. It was always Tom’s ambition to one day run his own company and after many years of working in the fashion, event management and business apparel sector, Tom set about to create a new business – one that would represent his commitment to client service and delivering quality - Business Apparel was formed in 2011.</p>
          <MediumButton>Our Services</MediumButton>
        </div>
        <img src={Tom} alt="tom" /> 
      </TextSection>
      <TextSection type="center inverse" color="#323133">
        <h1> We have got you covered </h1>
        <p> Our goal is to ensure we deliver the best service to you</p>
        <ValuesRow content={values} ></ValuesRow>
      </TextSection>
    </React.Fragment>
  );
};

export default About;