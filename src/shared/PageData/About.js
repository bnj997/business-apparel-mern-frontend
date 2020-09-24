import React from 'react';
import Tom from '../../images/Tom.jpg';

import KoolKids from '../../images/KoolKidsLogo.png';
import AndrewsParking from '../../images/AndrewsLogo.png';
import Korbond from '../../images/korbond.jpg';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';


export const useAboutData = () => {  
  const bannerSection = {
    heading: "About Us",
    description: "Learn more about our history and services"
  }
   
  const tomSection = {
    heading: "From humble beginnings",
    description: "In the 1980’s, Tom Gilmour came to Australia with his young family from Scotland and could not believe his luck. A country where the sun shone, the children could play for extended hours outdoors and you had limitless opportunity. As a person with solid core values of integrity, honesty and hard work Tom set about creating a new life for his family and giving his children the opportunity to grow and prosper in this great country. Melbourne was the chosen home for its four seasons, sporting and cultural energy and the lifestyle it afforded. It was always Tom’s ambition to one day run his own company and after many years of working in the fashion, event management and business apparel sector, Tom set about to create a new business – one that would represent his commitment to client service and delivering quality - Business Apparel was formed in 2011.",
    image: Tom
  }

  const valueIntro = {
    heading: "We have got you covered",
    description:  "Our goal is to ensure we deliver the best service to you"
  };
  
  const valueCard =  [
    {
      icon: <PeopleAltIcon/>,
      heading: "We wow our clients",
      description:"We ensure we are a step above the industry norm and deliver unparalleled service."
    },
    {
      icon:  <WorkIcon/>,
      heading: "We live and breathe projects",
      description:"No matter the project, we make sure we are part of your success."
    },
    {
      icon: <FavoriteIcon />,
      heading: "We value integrity and quality",
      description:"Our workflow includes no short cuts to ensure we deliver top quality."
    }
  ];

  const testimonialIntro = {
    heading: "Testimonials",
    description:  "Don't just listen to us; hear what our clients have to say!"
  };

  
  const testimonialCard =  [
    {
      image: KoolKids ,
      organisation: "Kool Kids Training College",
      comment: '"I manage a training college in the Childcare sector across multiple states and we have 1000+ students and staff requiring quality branded polos and pants. Our logo and colouring of our workwear is vibrant and we are often ordering, sometimes at short notice. We tried Tom on a small order a few years ago and have not looked back. Exceptional service is standard and I could not recommend the team at Business Apparel highly enough."',
      writer: "Sam Hendry" 
    },
    {
      image: AndrewsParking ,
      organisation: "Andrew's Airport Parking",
      comment: '"Tom and his amazing team at Business Apparel have been supplying our uniform for over 7 years. They regularly present us with new garments available and have proactively encouraged us to try new styles over the years so that our team always appear professional wearing garments suitable to their position and most all that are comfortable and stylish. We receive the highest quality garments that last the test of time, at a reasonable price. Delivery is always prompt and in person where we enjoy a friendly chat and being met with a smile.We wouldn’t go anywhere else for our uniform needs."',
      writer: "Lauren Pettenon"
    },
    {
      image: Korbond,
      organisation: "Korbond",
      comment: '"Business Apparel have been supplying Korbond with our Staff Uniforms for the past 5 years and we have always found them great to deal with. Good Pricing, Quality, Service and our deliveries are always on time."',
      writer: "Korbond"
    }
  ];
  

  return { bannerSection, tomSection, valueIntro, valueCard, testimonialIntro, testimonialCard};
};
