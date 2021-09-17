import React from 'react';

import MailIcon from '@material-ui/icons/Mail';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


export const useContactData = () => {  
  const bannerSection = {
    heading: "Contact Us",
    description: "We are happy to help! Just contact Tom!"
  }
  
  const detailIntro = {
    heading: "Our Details",
  };

  const detailSection =  {
    emailIcon: <MailIcon/>,
    email: "info@businessapparel.com.au",
    timeIcon: <AccessTimeIcon/>,
    openingWeekday: "Weekdays: 9am - 6pm",
    openingWeekend: "Saturday: 9am - 2pm"
  };

  

  return { bannerSection, detailIntro, detailSection};
};
