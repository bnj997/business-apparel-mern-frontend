import React, {useState, useEffect, useContext} from 'react'
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context'
import { Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Formik, Form} from 'formik';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, TextField} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import '../../shared/components/TableElements/ClientCart.css';

import { useHttpClient } from '../../shared/components/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Modal from '../../shared/components/UIElements/Modal';




const ClientCart= props => {
  const { v4: uuidv4 } = require('uuid');
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [info, setInfo] = useState('')

  const sizes1 = ["N/A", "2XS" , "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"]

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function exitModal() {
    setShowConfirmModal(false)
    history.push('/' + auth.username + '/orders');
  }


  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem(auth.userId))

    var sortedCart =  localCart.sort(function(a, b) {
      if (a.size.slice(-1) === "R") {
        return a.name.localeCompare(b.name) || a.colour.localeCompare(b.colour) || a.size.slice(0,-2) - b.size.slice(0,-2)
      } else if (a.size.includes("S") || a.size.includes("L") || a.size.includes("M") || a.size.includes("N/A")) {
        return a.name.localeCompare(b.name) || a.colour.localeCompare(b.colour) || sizes1.indexOf(a.size) - sizes1.indexOf(b.size)
      } else {
        return a.name.localeCompare(b.name) || a.colour.localeCompare(b.colour) || a.size - b.size 
      }
    });
   
    setCart(sortedCart)
  }, [auth.userId]) 

  useEffect(() => {
    let totalPrice = 0;
    if (cart.length === 0) {
      setTotalPrice(0);
    } else {
      cart.forEach(function(item) {
        setTotalPrice(() => {
          return totalPrice += item.subtotal;
        })
      })
    }
  }, [cart])
  


  const confirmOrder = async (cart, info) =>  {
    const orderid  = uuidv4()
    try {
      //construct new order
      console.log("make order")
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/orders`,
        'POST',
        JSON.stringify({
          _id: orderid,
          user: auth.userId,
          info: info,
        }),
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
    } catch (err) {}

    if (cart.length > 25) {
      let remainder = cart.length
      let start = 0
      let end = 26
      while (remainder > 0) {
        try {
          const response = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/order-lines/${orderid}`,
            'POST',
            JSON.stringify({
              cart: cart.slice(start, end),
              mainCart: cart,
            }),
            { 
         
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + auth.token
            }
          );
          if (remainder <= 25) {
            setCart([]);
            setShowConfirmModal(response)
            localStorage.setItem(auth.userId, JSON.stringify([]))
          }
        } catch (err) {}
        remainder = remainder - 25
        start = end 
        if (remainder <= 25) {
          end = end + remainder
        } else {
          end = end + 25
        }
      }
    } else {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/order-lines/${orderid}`,
          'POST',
          JSON.stringify({
            cart: cart,
            mainCart: cart,
          }),
          { 
       
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.token
          }
        );
        setCart([]);
        setShowConfirmModal(response)
        localStorage.setItem(auth.userId, JSON.stringify([]))
      } catch (err) {}
    }
    // try {
    //   //construct new order
    //   const response = await sendRequest(
    //     `${process.env.REACT_APP_BACKEND_URL}/orders/makeorder/${orderid}`,
    //     'POST',
    //     JSON.stringify({
    //       cart: cart,
    //     }),
    //     { 
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer ' + auth.token
    //     }
    //   );
    //   setCart([]);
    //   setShowConfirmModal(response)
    //   localStorage.setItem(auth.userId, JSON.stringify([]))
    // } catch (err) {}

  }


  const setChange = (rowData, quantity) => {
    let cartTemp = [...cart];
    const thisItem = cartTemp.find(cartItem => (cartItem.styleNum === rowData[1] && cartItem.name === rowData[2] && cartItem.colour === rowData[3] && cartItem.size === rowData[4]))
    thisItem.quantity = parseInt(quantity)
    thisItem.subtotal = quantity * rowData[5]
    setCart(cartTemp)
    let stringCart = JSON.stringify(cartTemp);
    localStorage.setItem(auth.userId, stringCart)
  }


  const removeFromCart  = (rowData) => {
    let cartTemp = [...cart]
    cartTemp = cartTemp.filter(cartItem => (cartItem.styleNum !== rowData[1] || cartItem.name !== rowData[2] || cartItem.colour !== rowData[3] || cartItem.size !== rowData[4]));
    setCart(cartTemp);    
    let cartString = JSON.stringify(cartTemp)
    localStorage.setItem(auth.userId, cartString)
  }


  const handleChange = (event) => {
    setInfo(event.target.value)
  }


  const columns = [
    {
      name: "image",
      label: "Image",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <img
            style={{width: "75px", height: "75px"}}
            alt="Garment"
            src={value}
            > 
          </img>
        )
      }
    },
    {
      name: "styleNum",
      label: "Style Number",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "colour",
      label: "Colour",
    },
    {
      name: "size",
      label: "Size",
      options: {
        customBodyRender: (value) => (
          <p>{value}</p>
        )
      }
    },
    {
      name: "price",
      label: "Price per unit",
      options: {
        customBodyRender: (value) => (
          <p>${value}</p>
        )
      }
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Formik 
            initialValues={{
              quantity: value
            }}
            enableReinitialize = {true}
          > 
          {({values, handleChange}) => (
            <Form >
              <OutlinedInput
                type="number"
                name="quantity"
                inputProps= {{
                  min: "1"
                }}
                value={values.quantity}
                onChange={e => {
                  setChange(tableMeta.rowData, e.target.value)
                  handleChange(e)
                }}
                style={{width: "6rem"}}
              />
            </Form>
          )}
        </Formik>
        )
      }
    },
    {
      name: "subtotal",
      label: "Subtotal",
      options: {
        customBodyRender: (value) => (
          <p>${value.toFixed(2)}</p>
        )
      }
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton
              aria-label="open drawer"
              onClick={ () =>
                removeFromCart(tableMeta.rowData)
              }
            >
              <CloseIcon />
            </IconButton>
          )
        }
      }
    }
  ]

  const options = {
    tableBodyHeight: "900px",
    rowsPerPage: 10,
    print: false,
    download: false,
    elevation: 0,
    selectableRows: "none",
  };



  return (
    <Dashboard user="client" onAdd={cart}>
      <div className="checkout_page" style={{marginTop: "3rem"}}>
        <h1> Your Checkout </h1>
        <div className="checkout_table" style={{display: "flex",  justifyContent: "space-between",  flexWrap: "wrap"}}>
          <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
          <Modal
            show={showConfirmModal}
            onCancel={exitModal}
            header="Order Sent" 
            footerClass="logout__modal-actions" 
            footer={
              <React.Fragment>
                <Button variant="contained" onClick={exitModal} > Okay </Button>
              </React.Fragment>
            }
          >
            <p>Your order has successfully been sent to Business Apparel!</p>
          </Modal>

          <div className="order_table "style={{backgroundColor: "white"}}>
            {isLoading ? (
              <Paper style={{width: '100%', height: '900px', display: "grid", placeItems: "center"}}>
                <h2>Your order is loading. Very large orders may take up to a minute to be processed. Please wait. </h2>
                <LoadingSpinner />
              </Paper>
            ) : (
              <MUIDataTable
                data={cart}
                columns={columns}
                options={options}
              />
            )}
          </div>
         
          <div className="additional_info" style={{backgroundColor: "white"}}>
            <div style={{margin: "2rem"}}>
              <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
                <h2>Additional Information</h2>
                <TextField 
                  style={{width: '100%'}}
                  value={info}
                  onChange={handleChange}
                  placeholder="Please make change to this uniform..."
                  name="info" 
                  variant="outlined"
                  multiline
                  rows={10}
                />
              </div>
              <div className="calculations" style={{marginTop: "2rem", marginBottom: "2rem" }}>
                <h2>Payment Due</h2>
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between"}}>
                  <div>
                    <h3>Subtotal:</h3>
                    <h3>GST:</h3>
                    <h3>Total Price: </h3>
                  </div>
                  <div>
                    <h3 style={{fontWeight: "normal"}}>${(totalPrice.toFixed(2))}</h3>
                    <h3 style={{fontWeight: "normal"}}>${(totalPrice * 0.1).toFixed(2)}</h3>
                    <h3 style={{fontWeight: "normal"}}>${(totalPrice + (totalPrice * 0.1)).toFixed(2)}</h3>
                  </div>
                </div>
              </div>
              <NavLink to={`/${auth.username}/catalogue`} style={{textDecoration: "none",  color: "white"}}>
                <Button 
                  variant="outlined"
                  style={{ width: "100%", borderRadius: "0", padding: "0"}}
                >
                  <h3>ADD MORE TO CART</h3>
                </Button>
              </NavLink>          
              <Button 
                variant="contained"
                style={{backgroundColor: (cart.length === 0 || isLoading) ? 'grey' : 'black', color: "white", width: "100%", borderRadius: "0", padding: "0", marginTop: "1rem"}}
                onClick={() => confirmOrder(cart, info)}
                disabled={cart.length === 0 || isLoading}
              >
                {isLoading ? (
                  <h3>ORDER PROCESSING...</h3>
                ) : (
                  <h3>CONFIRM ORDER</h3>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default ClientCart;