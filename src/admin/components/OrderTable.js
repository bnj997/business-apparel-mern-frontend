import React from 'react'

import './OrderTable.css';
import Grid from '@material-ui/core/Grid';

import MUIDataTable from "mui-datatables";


const columns = [
  {
    name: "order",
    label: "Order Num",
  },
  {
    name: "status",
    label: "Status",
  },
  {
    name: "HQ",
    label: "HQ",
  },
  {
    name: "branch",
    label: "Branch",
  },
  {
    name: "date",
    label: "Date",
  },
  {
    name: "requirements",
    label: "Requirements",
  }
]

const orders =  [
  {
    order: "32898",
    status: "New",
    HQ: "Menarock",
    branch: "Menarock Essendon",
    date: "32/4/2001",
    requirements: "Hello"
  },
  {
    order: "32898",
    status: "New",
    HQ: "Menarock",
    branch: "Menarock Essendon",
    date: "32/4/2001",
    requirements: "Hello"
  },
  {
    order: "32898",
    status: "New",
    HQ: "Menarock",
    branch: "Menarock Essendon",
    date: "32/4/2001",
    requirements: "Hello"
  },
  {
    order: "32898",
    status: "New",
    HQ: "Menarock",
    branch: "Menarock Essendon",
    date: "32/4/2001",
    requirements: "Hello"
  },
  {
    order: "32898",
    status: "New",
    HQ: "Menarock",
    branch: "Menarock Essendon",
    date: "32/4/2001",
    requirements: "Hello"
  },
];




const OrderTable = props => {
  const options = {
    tableBodyHeight: props.height,
  };
  return (
    <Grid className="table-center" style={{minWidth: props.width}}>
      <MUIDataTable
        title={"Order list"}
        data={orders}
        columns={columns}
        options={options}
      />
    </Grid>
  );
}

export default OrderTable;