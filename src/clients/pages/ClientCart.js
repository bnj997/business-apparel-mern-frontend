import React, {useState, useEffect, useContext} from 'react'
import Dashboard from '../../shared/components/PageTemplates/Dashboard'
import { AuthContext } from '../../shared/context/auth-context'
import { Formik, Form} from 'formik';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button} from "@material-ui/core";
import MUIDataTable from "mui-datatables";



const ClientCart= props => {
  const auth = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem(auth.userId))
    setCart(localCart)
  }, []) 


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
            style={{width: "100px", height: "100px"}}
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
          <p>${value}</p>
        )
      }
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
                startIcon={<DeleteIcon />}
                style={{margin: "0"}}
                onClick={ () =>
                  removeFromCart(tableMeta.rowData)
                }
              >
                Remove
              </Button>
            </React.Fragment>
          )
        }
      }
    }
  ]

  const options = {
    tableBodyHeight: "750px",
    rowsPerPage: 10,
    print: false,
    download: false,
    elevation: 0,
    selectableRows: false,
  };



  return (
    <Dashboard user="client" onAdd={cart}>
      <div style={{marginLeft: "4rem", marginRight: "4rem", marginTop: "3rem"}}>
        <h1>Your Checkout</h1> 
        <MUIDataTable
          data={cart}
          columns={columns}
          options={options}
        />
      </div>
    </Dashboard>
  );
}

export default ClientCart;