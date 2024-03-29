import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import HQTable from '../components/Tables/HQTable';

const Headquarters = props => {
  return (
    <Dashboard user="adminstaff">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>HQ List</h1> 
        <HQTable />
      </div>
    </Dashboard>
  );
}

export default Headquarters;