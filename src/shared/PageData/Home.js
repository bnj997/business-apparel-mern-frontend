import bizCollection from '../../images/biz-collection.jpg';
import winningSpirit from '../../images/winning-spirit.jpg';
import jbWears from '../../images/jb-wear.jpg';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';


export const useHomeData = () => {  
  const bannerSection = {
    image1: slide1,
    image2: slide2,
    image3: slide3,
  }
   
  const storySection = {
    heading: "Our Story",
    description: "It was after 25 years working in the apparel industry that I decided to create Business Apparel in 2011 – a specialist supplier of workwear for busy companies that want quality apparel delivered on time, every time. Our mission is to provide a 'one stop shop' apparel management service focussing on the design, production and delivery of any business, work or leisure apparel for the SMB and / or corporate sector. Our experience in the garment industry means we can walk you through the process of creating your samples to finished garments. We only work with a small group of valued clients and pride ourselves on fast and professional service in the selection and delivery of business apparel. If you want the best in business apparel and best in service, then let us support your team. Submit your enquiry now."
  }

  const supplierIntro = {
    heading: "Our Suppliers",
    description:  "We source your uniforms from reputable suppliers only"
  };
  
  const supplierCard =  [
    {
      image: bizCollection,
      heading: "Biz Collection",
    },
    {
      image: winningSpirit,
      heading: "Winning Spirit",
    },
    {
      image: jbWears,
      heading: "JB Wears",
    }
  ];
  

  return { bannerSection, storySection,  supplierIntro, supplierCard};
};
