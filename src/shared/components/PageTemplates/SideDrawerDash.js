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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ContactsIcon from '@material-ui/icons/Contacts';
import CloseIcon from '@material-ui/icons/Close';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
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
  shopButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#212121"
  },
  shopDrawer: {
    width: 400,
    backgroundColor: "white"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



const SideDrawerDash = props => {
  const auth = useContext(AuthContext);
  const { window } = props;
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [shopMobileOpen, setShopMobileOpen] = useState(false);
  const handleShopDrawerToggle = () => {
    setShopMobileOpen(!shopMobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <h2 style={{color: "white", paddingLeft: "1rem"}}>Actions </h2>
      <List style={{color:  "#B3B3B3"}}>

        {props.user === "adminstaff" && (
          ['Orders', 'Headquarters', 'Garments'].map(function(link, i){
            return (
              <NavLink to={`/admin/${link.charAt(0).toLowerCase() + link.slice(1)}`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
                <ListItemIcon style={{color: "white"}}>
                  {link === 'Orders' && <AttachMoneyIcon />}
                  {link === 'Headquarters' && <BusinessIcon />}
                  {link === 'Garments' && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={`${link}`}  style={{color: "white"}}  />
              </NavLink>
            )
          })
        )}

        {props.user === "client" && (
          ['Orders', 'Catalogue', 'Shopping cart'].map(function(link, i){
            return (
              <NavLink to={`/${auth.username}/${link.charAt(0).toLowerCase() + link.slice(1)}`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
                <ListItemIcon style={{color: "white"}}>
                  {link === 'Orders' && <AttachMoneyIcon />}
                  {link === 'Catalogue' && <BusinessIcon />}
                  {link === 'Shopping cart' && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={`${link}`}  style={{color: "white"}}  />
              </NavLink>
            )
          })
        )}
      </List>
      <Divider style={{backgroundColor: "grey"}}/>
      <h2 style={{color: "white", paddingLeft: "1rem"}}>Pages</h2>
      <List style={{color:  "#B3B3B3"}}>
        {['Home', 'About', 'Team', 'Contact'].map(function(link, i){
          return (
            <NavLink to={`${link.charAt(0).toLowerCase() + link.slice(1)}`} style={{display: "flex", padding: "8px 16px 8px 16px", textDecoration: "none", color: "#B3B3B3"}}>
              <ListItemIcon  style={{color:  "white"}}>
                {link === 'Home' && <HomeIcon />}
                {link === 'About' && <InfoIcon />}
                {link === 'Team' && <GroupIcon />}
                {link === 'Contact' && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={`${link}`}  style={{color: "white"}} />
            </NavLink>
          )
        })}
      </List>
    </div>
  );

  const shopdrawer = (
    <div>
      <IconButton
        aria-label="open drawer"
        style={{display: "block", marginLeft: "auto", marginRight: "0"}}
        onClick={handleShopDrawerToggle}
      >
        <CloseIcon />
      </IconButton>
      <Divider style={{backgroundColor: "#E6E6E6"}}/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{ display: 'flex', justifyContent: "space-between"}}>
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
        <IconButton
          color="inherit"
          aria-label="open shopCart"
          edge="end"
          onClick={handleShopDrawerToggle}
          className={classes.shopButton}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden lgUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor='left'
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

      <Hidden lgUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor='right'
          open={shopMobileOpen}
          onClose={handleShopDrawerToggle}
          classes={{
            paper: classes.shopDrawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {shopdrawer}
        </Drawer>
      </Hidden>
    </nav>
  </React.Fragment>
  );
}

export default SideDrawerDash