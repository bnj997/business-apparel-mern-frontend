import React from 'react';
import { useParams } from 'react-router-dom';

import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import ThisClientOrderTable from '../Tables/ThisClientOrderTable'


const ThisClientOrder = props => {
  const orderID = useParams().oid;

  return (
    <Dashboard user="client">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Order Information: {orderID} </h1> 
        <ThisClientOrderTable />
      </div>
    </Dashboard>
  );
}

export default ThisClientOrder;

