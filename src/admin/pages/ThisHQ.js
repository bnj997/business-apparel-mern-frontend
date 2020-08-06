import React, { useState} from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { Button } from '@material-ui/core';
import GarmentTable from '../components/Tables/GarmentTable';


const ThisHQ = props => {
  const [type, setType] = useState("orders")

  return (
    <Dashboard>
      <div>
        <Button variant="contained" onClick={() => setType("Orders")}> Orders </Button>
        <Button variant="contained" onClick={() => setType("Garments")}> Garments </Button>
        <Button variant="contained" onClick={() => setType("Branches")}> Branches </Button>
        <Button variant="contained" onClick={() => setType("Users")}> Users </Button>
        { (type === "Garments") && <GarmentTable />}
      </div>
    

    </Dashboard>

  );
}

export default ThisHQ;