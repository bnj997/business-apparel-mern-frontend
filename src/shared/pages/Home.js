import React from 'react';

import MainNavigation from '../components/Navigation/MainNavigation';
import MainFooter from '../components/Navigation/MainFooter';
import SecondaryFooter from '../components/Navigation/SecondaryFooter';

import Carousel from '../components/UIElements/Carousel';
import TextSection from '../components/UIElements/TextSection';
import MediumButton from '../components/FormElements/MediumButton'
import CardRow from '../components/UIElements/CardRow';
import { useHomeData } from '../PageData/Home';

const Home = () => {
  const {bannerSection, storySection, supplierIntro, supplierCard } = useHomeData();

  return (
    <React.Fragment>
      <MainNavigation />
      <Carousel banners={bannerSection} />
      <TextSection type="center normal" color="#F5F5F5">
        <h1>{storySection.heading}</h1>
        <p>{storySection.description}</p>
        <MediumButton to="/contact">Submit Enquiry </MediumButton>
      </TextSection>
      <TextSection type="center normal" >
        <h1>{supplierIntro.heading}</h1>
        <p>{supplierIntro.description}</p>
        <CardRow content={supplierCard} type="supplier"></CardRow>
      </TextSection>
      <MainFooter />
      <SecondaryFooter />
    </React.Fragment>
  )
};

export default Home;