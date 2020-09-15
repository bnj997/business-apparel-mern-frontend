import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import OrderTable from '../components/Tables/OrderTable';

const Orders = props => {
  return (
    <Dashboard user="adminstaff">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Order List</h1> 
        <OrderTable />
      </div>
    </Dashboard>
  );
}

export default Orders;