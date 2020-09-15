import React from 'react';
import { useParams } from 'react-router-dom';

import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import ThisOrderTable from '../components/Tables/ThisOrderTable'


const ThisOrder = props => {
  const orderID = useParams().oid;

  return (
    <Dashboard user="adminstaff">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Order Information: {orderID} </h1> 
        <ThisOrderTable />
      </div>
    </Dashboard>
  );
}

export default ThisOrder;

