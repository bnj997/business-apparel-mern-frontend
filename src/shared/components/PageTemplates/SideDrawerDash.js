import React, {useContext, useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InfoIcon from '@material-ui/icons/Info';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';





const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "black",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#212121"
  },
  content: {
    flexGrow: 1,
  },
}));



const SideDrawerDash = props => {
  const auth = useContext(AuthContext);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <h2 style={{color: "white", paddingLeft: "1rem"}}>Actions </h2>
      <List style={{color:  "#B3B3B3"}}>
        <NavLink to={`/admin/orders`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon style={{color: "white"}}><AttachMoneyIcon /></ListItemIcon>
          <ListItemText primary="Orders"  style={{color: "white"}}  />
        </NavLink>
        <NavLink to={`/admin/headquarters`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon style={{color: "white"}}><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Headquarters"  style={{color: "white"}} />
        </NavLink>
          <NavLink to={`/admin/garments`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon style={{color: "white"}}><PersonIcon /></ListItemIcon>
          <ListItemText primary="Garments"  style={{color: "white"}} />
        </NavLink>
      </List>


      <Divider style={{backgroundColor: "grey"}}/>
      <h2 style={{color: "white", paddingLeft: "1rem"}}>Pages</h2>
      <List style={{color:  "#B3B3B3"}}>
        <NavLink to="/home" style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon  style={{color:  "white"}}><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home"  style={{color: "white"}} />
        </NavLink>
        <NavLink to="/about" style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon  style={{color:  "white"}}><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" style={{color: "white"}}/>
        </NavLink>
        <NavLink to="/team" style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon  style={{color:  "white"}}><GroupIcon /></ListItemIcon>
          <ListItemText primary="Team"  style={{color: "white"}} />
        </NavLink>
        <NavLink to="/contact" style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
          <ListItemIcon  style={{color:  "white"}}><ContactsIcon /></ListItemIcon>
          <ListItemText primary="Contact"  style={{color: "white"}}/>
        </NavLink>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h1> Hello {auth.username} </h1>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default SideDrawerDash