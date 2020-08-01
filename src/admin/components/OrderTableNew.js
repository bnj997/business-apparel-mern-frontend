import React from 'react'

import './OrderTable.css';
import Grid from '@material-ui/core/Grid';

import MaterialTable from 'material-table'


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




const OrderTableNew = props => {
  // const options = {
  //   tableBodyHeight: props.height,
  //   responsive: 'stacked',
  //   filterType: 'checkbox',
  //   rowsPerPage: 15,
  // };
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Actions On Selected Rows Preview"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          selection: true
        }}
        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: 'delete',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
          }
        ]}
      />
    </div>
  )

}

export default OrderTableNew;