import React, {useContext, useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { Button} from '@material-ui/core';

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
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CartItem from '../../../clients/UIElements/CartItem'
import './SideDrawerDash.css';
import ShoppingCart from '../../../clients/UIElements/ShoppingCart';

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
  const [cart, setCart] = useState([])

  const [total, setTotal] = useState(0);

  const { window } = props;
  const classes = useStyles();

  useEffect(() => {
    if (!localStorage.getItem(auth.userId)) {
      localStorage.setItem(auth.userId, JSON.stringify([]))
    } else {
      let localCart = JSON.parse(localStorage.getItem(auth.userId))
      setCart(localCart)
    }
  }, [props.onAdd]) 


  useEffect(() => {
    let total = 0;
    if (cart.length === 0) {
      setTotal(0);
    } else {
      cart.forEach(function(item) {
        setTotal(() => {
          return total += item.quantity * item.price;
        });
      })
    }
  }, [cart]) 


  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [shopMobileOpen, setShopMobileOpen] = useState(false);
  const handleShopDrawerToggle = () => {
    setShopMobileOpen(!shopMobileOpen);
  };



  const removeFromCart = (item) => {
    let cartCopy = [...cart]
    cartCopy = cartCopy.filter(garment => (garment.id != item.id || garment.colour != item.colour || garment.size != item.size));
    setCart(cartCopy);
    
    let cartString = JSON.stringify(cartCopy)
    localStorage.setItem(auth.userId, cartString)
  }


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
    <React.Fragment>
      <div className="close-section">
        <IconButton
          aria-label="open drawer"
          onClick={handleShopDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
        <Divider style={{backgroundColor: "#E6E6E6"}}/>
      </div>
      <div className="cart-section">
        {cart.length !== 0 ? ( 
          cart.map((function(garments, index) {
            return (
              <CartItem
                key={index}
                id={garments.id}
                image={garments.image}
                name={garments.name}
                price={garments.price}
                size={garments.size}
                colour={garments.colour}
                quantity={garments.quantity}
                onRemove={removeFromCart}
              />
            )
            })
          )
        ) : (
          <div style={{textAlign: "center", margin: "3rem"}}>
            <h2>Your shopping cart is currently empty</h2>
            <p> Add some garments and view them here.</p>
          </div>
        )}
      </div>
      <div className="checkout-section" >
        <Divider/>
        <div className="total-price">
          <h3>Total</h3>
          <h3>${total}</h3>
        </div>    
        <Divider/>  
        <div className="nav-section">
          <Button 
            variant="outlined"
          >
            <p>VIEW CART</p>
          </Button>
          <Button 
            variant="contained"
            style={{backgroundColor: "black", color: "white" }}
          >
            <p>PROCEED TO CHECKOUT</p>
          </Button>
        </div>
      </div>
     
    </React.Fragment>
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

        { auth.username !== "adminstaff" && 
          <IconButton
            color="inherit"
            aria-label="open shopCart"
            edge="end"
            onClick={handleShopDrawerToggle}
            className={classes.shopButton}
          >
            <ShoppingCart userId={auth.userId} change={cart}/>
          </IconButton>
        }
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

      { auth.username !== "adminstaff" && 
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
      }

    </nav>
  </React.Fragment>
  );
}

export default SideDrawerDash