import React from 'react';
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import Profile from '../../shared/components/UIElements/Profile';
import ClientOrderTable from '../Tables/ClientOrderTable'


const ClientOrders = props => {

  return (
    <Dashboard user="client">
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Branch Information</h1>
        <Profile />
        <h1>Your Orders</h1> 
        <ClientOrderTable />
      </div>
    </Dashboard>
  );
}

export default ClientOrders;







