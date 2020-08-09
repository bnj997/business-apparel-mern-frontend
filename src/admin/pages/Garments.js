import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import GarmentTable from '../components/Tables/GarmentTable';

const Garments = props => {
  return (
    <Dashboard>
      <GarmentTable />
    </Dashboard>
  );
}

export default Garments;