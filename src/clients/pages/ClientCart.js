import React, {useState, useEffect, useContext} from 'react'
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { AuthContext } from '../../shared/context/auth-context'
import { Formik, Form} from 'formik';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Paper, TextField} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import './ClientCart.css';




const ClientCart= props => {
  const auth = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.00)

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem(auth.userId))
    setCart(localCart)
  }, []) 

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


  const setChange = (rowData, quantity) => {
    let cartTemp = [...cart];
    const thisItem = cartTemp.find(cartItem => cartItem.name === rowData[1] && cartItem.colour === rowData[2] && cartItem.size === rowData[3])
    thisItem.quantity = quantity
    thisItem.subtotal = quantity * rowData[4]
    setCart(cartTemp)
    let stringCart = JSON.stringify(cartTemp);
    localStorage.setItem(auth.userId, stringCart)
  }


  const removeFromCart  = (rowData) => {
    let cartTemp = [...cart]
    cartTemp = cartTemp.filter(cartItem => (cartItem.name !== rowData[1] || cartItem.colour != rowData[2] || cartItem.size != rowData[3]));
    setCart(cartTemp);    
    let cartString = JSON.stringify(cartTemp)
    localStorage.setItem(auth.userId, cartString)
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
            src={`http://localhost:5000/${value}`}
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
    tableBodyHeight: "750px",
    rowsPerPage: 10,
    pagination: false,
    print: false,
    download: false,
    elevation: 0,
    selectableRows: false,
  };



  return (
    <Dashboard user="client" onAdd={cart}>
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1> Your Checkout </h1>
        <Paper>
          <Formik 
            initialValues={{
              data: cart,
              info: '',
            }}
            onSubmit={(data, {setSubmitting, resetForm}) =>  {
              setSubmitting(true)
              setSubmitting(false)
              resetForm();
            }}
          >
          {({values, isSubmitting}) => (
            <Form >
              <MUIDataTable
                data={cart}
                columns={columns}
                options={options}
              />
              <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: "3rem", marginRight: "3rem", marginTop: "1rem"}}>
                <div>
                  <h3>Additional Information</h3>
                  <TextField 
                    style={{width: '500px', marginBottom: "2rem"}}
                    placeholder="Aditional info"
                    name="info" 
                    variant="outlined"
                    multiline
                    rows={5}
                    type="input" 
                    isMultiline={true} 
                  />
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '300px'}}>
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
            </Form>
          )}
          </Formik>
        </Paper>
      </div>
    </Dashboard>
  );
}

export default ClientCart;