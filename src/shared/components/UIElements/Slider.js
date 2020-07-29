import React from 'react';

import Slider from "react-slick";
import './Slider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from './TestimonialCard';


const ASlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="slider">
      {props.content.map((item, index) => 
        (
          <TestimonialCard {...item}/>       
        )
      )
      }
    </Slider>
  );
};

export default ASlider;
