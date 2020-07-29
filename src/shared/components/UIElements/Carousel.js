import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

import './Carousel.css';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';


const MyCarousel = () => {
  return (
    <Carousel className="slide" showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true} transitionTime={400}>
      <div>
        <img src={slide1} alt="slide1" />
      </div>
      <div>
        <img src={slide2} alt="slide2" />
      </div>
      <div>
        <img src={slide3} alt="slide3" />
      </div>
    </Carousel>
  )
}

export default MyCarousel;