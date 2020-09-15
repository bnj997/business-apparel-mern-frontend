import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import OrderTable from '../Tables/OrderTable'


const ClientOrders = props => {

  return (
    <Dashboard user="client">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Your Orders</h1> 
        <OrderTable />
      </div>
    </Dashboard>
  );
}

export default ClientOrders;







