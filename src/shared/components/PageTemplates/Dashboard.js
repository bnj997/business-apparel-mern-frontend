import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawerDash from './SideDrawerDash';
import './Dashboard.css';


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
    padding: theme.spacing(3),
  },
  
}));

const Dashboard = props => {
  const classes = useStyles();

  return (
    <div className="dashboard">
      <CssBaseline />
      <SideDrawerDash user={props.user}  cart={props.cart}/>
      <main className={classes.content} >
        <div className={classes.toolbar} />
        {props.children}
      </main> 
    </div>
  );
}


export default Dashboard;