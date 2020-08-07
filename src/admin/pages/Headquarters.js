import React, {useState, useEffect} from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import HQTable from '../components/Tables/HQTable';



const Headquarters = props => {

  return (
    <Dashboard>
      <HQTable/>
    </Dashboard>
  );
}

export default Headquarters;