import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawerDash from '../components/SideDrawerDash';
import OrderTable from '../components/OrderTable';
import OrderTableNew from '../components/OrderTableNew';
import './Dashboard.css';

const useStyles = makeStyles((theme) => ({
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
        <OrderTable height={"55rem"} />
        {/*<OrderTableNew/>*/}
        {/* <div className="two-side">
          <OrderTable height={"45rem"} />
          <OrderTable height={"45rem"} />
        </div> */}
      </main> 
    </div>
  );
}

export default Dashboard;