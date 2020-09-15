import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import GarmentTable from '../components/Tables/GarmentTable';

const Garments = props => {
  return (
    <Dashboard user="adminstaff">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Garment List</h1> 
        <GarmentTable />
      </div>
    </Dashboard>
  );
}

export default Garments;