import React from 'react'

import './OrderTable.css';
import Grid from '@material-ui/core/Grid';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <React.Fragment>
            <Button
              variant="contained"
              color="default"
              startIcon={<EditIcon />}
              style={{margin: "0"}}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="default"
              startIcon={<DeleteIcon />}
              style={{margin: "0"}}
            >
              delete
            </Button>
          </React.Fragment>
        )
      }
    }
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




const OrderTable = props => {
  const options = {
    tableBodyHeight: props.height,
    rowsPerPage: 10,
    // onRowClick: (rowData, rowMeta) => {
    //   console.log("----RowClick");
    //   console.log("rowData: ", rowData);
    // }
  };
  return (
    <MUIDataTable
      className="table-center"
      data={orders}
      columns={columns}
      options={options}
    />
  );
}

export default OrderTable;