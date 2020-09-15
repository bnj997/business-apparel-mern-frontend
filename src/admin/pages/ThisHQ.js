import React, { useState, useEffect} from 'react';

import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { Button } from '@material-ui/core';
import HQGarmentTable from '../components/Tables/HQGarmentTable';
import HQBranchTable from '../components/Tables/HQBranchTable';
import HQUserTable from '../components/Tables/HQUserTable';


const ThisHQ = props => {
  const [type, setType] = useState("Garments")

  return (
    <Dashboard>
      <div>
        <Button variant="contained" onClick={() => setType("Orders")}> Orders </Button>
        <Button variant="contained" onClick={() => setType("Garments")}> Garments </Button>
        <Button variant="contained" onClick={() => setType("Branches")}> Branches </Button>
        <Button variant="contained" onClick={() => setType("Users")}> Users </Button>
        { (type === "Garments") && <HQGarmentTable />}
        { (type === "Branches") && <HQBranchTable />}
        { (type === "Users") && <HQUserTable />}
      </div>
  
    </Dashboard>

  );
}

export default ThisHQ;