import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawerDash from '../components/SideDrawerDash';
import './Dashboard.css';
import DataTable from '../../shared/components/FormElements/DataTable';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // Necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <div className="dashboard">
      <CssBaseline />
      <SideDrawerDash />
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <DataTable
          title="Garments"
          defaultValueArray={["", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]}
          columns={[
            {
              name: "styleNum",
              label: "StyleNum",
            },
            {
              name: "garmentImg",
              label: "Image",
              options: {
                sort: false,
                customBodyRender: (value) => (
                  <img
                    alt="organisation logo"
                    src={value}
                    > 
                  </img>
                )
              }
            },
            {
              name: "name",
              label: "Name",
            },
            {
              name: "price",
              label: "Price",
            },
            {
              name: "category",
              label: "Category",
            },
            {
              name: "supplier",
              label: "Supplier",
            },
            {
              name: "description",
              label: "Description",
            },
            {
              name: "colours",
              label: "Colours",
            },
            {
              name: "sizes",
              label: "Sizes",
            }
          ]}
        />
      </main> 
    </div>
  );
}


export default Dashboard;