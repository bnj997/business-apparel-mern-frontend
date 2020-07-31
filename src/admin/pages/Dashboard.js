import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawerDash from '../components/SideDrawerDash';
import OrderTable from '../components/OrderTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideDrawerDash />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <OrderTable height="8rem" width="90%" />
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>
          <OrderTable height="40rem" width="45%"/>
          <OrderTable height="40rem" width="45%" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;