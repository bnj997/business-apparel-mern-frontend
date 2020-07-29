import React from 'react';

import Jumbotron from '../components/UIElements/Jumbotron';
import TextSection from '../components/UIElements/TextSection';
import MediumButton from '../components/FormElements/MediumButton'
import CardRow from '../components/UIElements/CardRow';
import Slider from '../components/UIElements/Slider';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Tom from '../../images/Tom.jpg';
import EnquiryForm from '../components/FormElements/EnquiryForm';

const values =  [
  {
    icon: <PeopleAltIcon/>,
    heading: "We wow our clients",
    description: "We ensure we are a step above the industry norm and deliver unparalleled service."
  },
  {
    icon: <WorkIcon/>,
    heading: "We live and breathe projects",
    description: "No matter the project, we make sure we are part of your success."
  },
  {
    icon: <FavoriteIcon />,
    heading: "We value integrity and quality",
    description: "Our workflow includes no short cuts to ensure we deliver top quality."
  }
];

const testimonials =  [
  {
    imageURL: "data:image/png;base64,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",
    organisation: "Kool Kids Training College",
    comment: '"I manage a training college in the Childcare sector across multiple states and we have 1000+ students and staff requiring quality branded polos and pants. Our logo and colouring of our workwear is vibrant and we are often ordering, sometimes at short notice. We tried Tom on a small order a few years ago and have not looked back. Exceptional service is standard and I could not recommend the team at Business Apparel highly enough."',
    writer: "Sam Hendry" 
  },
  {
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCvrnK4TqtU8G0tBnprSWFpyDl9LzuuLZIw&usqp=CAU",
    organisation: "Andrew's Airport Parking",
    comment: '"Tom and his amazing team at Business Apparel have been supplying our uniform for over 7 years. They regularly present us with new garments available and have proactively encouraged us to try new styles over the years so that our team always appear professional wearing garments suitable to their position and most all that are comfortable and stylish. We receive the highest quality garments that last the test of time, at a reasonable price. Delivery is always prompt and in person where we enjoy a friendly chat and being met with a smile.We wouldn’t go anywhere else for our uniform needs."',
    writer: "Lauren Pettenon"
  },
  {
    imageURL: "https://www.businessapparel.com.au/files/Settings/clients/test13.JPG",
    organisation: "Korbond",
    comment: '"Business Apparel have been supplying Korbond with our Staff Uniforms for the past 5 years and we have always found them great to deal with. Good Pricing, Quality, Service and our deliveries are always on time."',
    writer: "Korbond"
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
        <div>
          <img src={Tom} alt="tom" /> 
        </div>
      </TextSection>
      <TextSection type="center inverse" color="#323133">
        <h1> We have got you covered </h1>
        <p> Our goal is to ensure we deliver the best service to you</p>
        <CardRow content={values} type="value" ></CardRow>
      </TextSection>
      <TextSection type="center normal" >
        <h1> Testimonials </h1>
        <p> Don't just listen to us; hear what our clients have to say! </p>
        <Slider content={testimonials}></Slider> 
      </TextSection>
    </React.Fragment>
  );
};

export default About;