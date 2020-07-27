import React from 'react';

import Carousel from '../components/UIElements/Carousel';
import TextSection from '../components/UIElements/TextSection';
import MediumButton from '../components/FormElements/MediumButton'
import SupplierCard from '../components/UIElements/SupplierCard';
import CardRow from '../components/UIElements/CardRow';

import placeholder from '../../images/placeholder.png';


const Home = () => {
  return (
    <React.Fragment>
      <Carousel />
      <TextSection color="#F5F5F5">
        <h1> Our Story</h1>
        <p> It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. We only work with a small group of valued clients and pride ourselves on fast and professional service in the selection and delivery of business apparel. If you want the best in business apparel and best in service, then let us support your team. Submit your enquiry now.</p>
        <MediumButton>Submit Enquiry</MediumButton>
      </TextSection>
      <TextSection color="white">
        <h1> Our Suppliers </h1>
        <p> We source your uniforms from reputable suppliers only.</p>
        <CardRow>
          <SupplierCard image={placeholder}>
            <h1> Biz Collection </h1>
            <p> Access Catalogue Here</p>
          </SupplierCard>
          <SupplierCard image={placeholder}>
            <h1> Winning Spirit </h1>
            <p> Access Catalogue Here </p>
          </SupplierCard>
          <SupplierCard image={placeholder}>
            <h1> JB Wears </h1>
            <p> Access Catalogue Here </p>
          </SupplierCard>
        </CardRow>
      </TextSection>
    </React.Fragment>
  )
};

export default Home;