import React from 'react';
import Jumbotron from '../components/UIElements/Jumbotron';

import TextSection from '../components/UIElements/TextSection';
import CardRow from '../components/UIElements/CardRow';

const team =  [
  {
    imageURL: "https://www.businessapparel.com.au/files/Settings/about/6053901136749759461.jpg",
    name: "Tom Gilmour",
    position: "Managing Director",
    description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
  },
  {
    imageURL: "https://www.businessapparel.com.au/files/Settings/about/2570630956193258453.jpg",
    name: "Domenica Gilmour",
    position: "Assistant Director",
    description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
  },
  {
    imageURL: "https://www.businessapparel.com.au/files/Settings/about/4378196148644415706.jpg",
    name: "Claire Lambert",
    position: "Operations",
    description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
  },
  {
    imageURL: "https://www.businessapparel.com.au/files/Settings/about/2683.jpg",
    name: "Paul Lambert",
    position: "Operations",
    description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
  }
];


const Team = () => {
  return (
    <React.Fragment>
      <Jumbotron 
        heading="Our Team" 
        text="The behind the scenes of our operation"
      />
      <TextSection type="center normal" >
        <CardRow content={team} type="team"></CardRow> 
      </TextSection>
    </React.Fragment>
  );
};

export default Team;