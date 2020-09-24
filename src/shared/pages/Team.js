import React from 'react';
import Jumbotron from '../components/UIElements/Jumbotron';

import MainNavigation from '../components/Navigation/MainNavigation';
import MainFooter from '../components/Navigation/MainFooter';
import SecondaryFooter from '../components/Navigation/SecondaryFooter';

import TextSection from '../components/UIElements/TextSection';
import CardRow from '../components/UIElements/CardRow';
import { useTeamData } from '../PageData/Team';


const Team = () => {
  const {bannerSection, teamSection } = useTeamData();

  return (
    <React.Fragment>
      <MainNavigation />
      <Jumbotron 
        heading={bannerSection.heading}
        text={bannerSection.description}
      />
      <TextSection type="center normal" >
        <CardRow content={teamSection} type="team"></CardRow> 
      </TextSection>
      <MainFooter />
      <SecondaryFooter />
    </React.Fragment>
  );
};

export default Team;