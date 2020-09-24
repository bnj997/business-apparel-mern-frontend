import React, { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { Button } from '@material-ui/core';
import HQGarmentTable from '../components/Tables/HQGarmentTable';
import HQBranchTable from '../components/Tables/HQBranchTable';
import HQUserTable from '../components/Tables/HQUserTable';

import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const ThisHQ = props => {
  const [type, setType] = useState("Garments")
  const [name, setName] = useState('');
  const auth = useContext(AuthContext);
  const {sendRequest} = useHttpClient();
  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchHQName = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/hqs/${hqID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setName(responseData.hq.name);
      } catch (err) {}
    };
    fetchHQName();
  }, [sendRequest, hqID, auth.token])

  return (
    <Dashboard  user="adminstaff">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>{name}</h1> 
        <Button color="primary" onClick={() => setType("Garments")}> Garments </Button>
        <Button color="primary" onClick={() => setType("Branches")}> Branches </Button>
        <Button color="primary" onClick={() => setType("Users")}> Users </Button>
        <div style={{marginTop: "2rem"}}>
          { (type === "Garments") && <HQGarmentTable />}
          { (type === "Branches") && <HQBranchTable />}
          { (type === "Users") && <HQUserTable />}
        </div>
      </div>
    </Dashboard>

  );
}

export default ThisHQ;