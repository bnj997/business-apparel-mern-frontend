import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

import "./Carousel.css";

const MyCarousel = (props) => {
  return (
    <Carousel
      className="slide"
      showArrows={true}
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={400}
    >
      <div>
        <img src={props.banners.image1} alt="slide1" />
      </div>
      <div>
        <video width="100%" height="1000" controls>
          <source src={props.banners.video1} type="video/mp4" />
        </video>
      </div>
      {/* <div>
        <img src={props.banners.image2} alt="slide2" />
      </div>
      <div>
        <img src={props.banners.image3} alt="slide3" />
      </div> */}
    </Carousel>
  );
};

export default MyCarousel;
