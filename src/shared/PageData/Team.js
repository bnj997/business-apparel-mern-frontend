import Tom from '../../images/Tom.jpg';
import Domenica from '../../images/Domenica.jpg';
import Claire from '../../images/Claire.jpg';
import Paul from '../../images/Paul.jpg';


export const useTeamData = () => {  
  const bannerSection = {
    heading: "Our Team",
    description: "The behind the scenes of our operation"
  }
   
  
  const teamSection =  [
    {
      image: Tom,
      name: "Tom Gilmour",
      position: "Managing Director",
      description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
    },
    {
      image: Domenica,
      name: "Domenica Gilmour",
      position: "Assistant Director",
      description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
    },
    {
      image: Claire,
      name: "Claire Lambert",
      position: "Operations",
      description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
    },
    {
      image: Paul,
      name: "Paul Lambert",
      position: "Operations",
      description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. "
    }
  ];

  return { bannerSection, teamSection};
};
