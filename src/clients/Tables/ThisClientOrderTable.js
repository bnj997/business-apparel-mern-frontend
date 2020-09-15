import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import MUIDataTable from "mui-datatables";
import Modal from '../../shared/components/UIElements/Modal'

import '../pages/ClientCart.css'

import { TextField} from "@material-ui/core";

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const OrderTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [totalPrice, setTotalPrice] = useState(0.00)
  const orderID = useParams().oid;

  const [Datas, setData] = useState([]);
  const [info, setInfo] = useState('');
  const [showOrderAddModal, setShowOrderAddModal] = useState(true);

  useEffect(() => {
    const fetchOrderLines = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/order-lines/${orderID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.orderlines);

        let totalPrice = 0;
        if (responseData.orderlines.length === 0) {
          setTotalPrice(0);
        } else {
          responseData.orderlines.forEach(function(item) {
            setTotalPrice(() => {
              return totalPrice += item.subtotal;
            })
          })
        }
      } catch (err) {}

      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/orders/${orderID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        console.log(responseData)
        setInfo(responseData.order.info);
      } catch (err) {}

    };
    fetchOrderLines();
  }, [sendRequest, auth.token])



  const showModal = () => {
    setShowOrderAddModal(true)
  }

  const exitModal = () => {
    setShowOrderAddModal(false)
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
      name: "quantity",
      label: "Quantity",
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
      name: "subtotal",
      label: "Subtotal",
      options: {
        customBodyRender: (value) => (
          <p>${value}</p>
        )
      }
    }
  ]

  const options = {
    tableBodyHeight: "55rem",
    rowsPerPage: 10,
    print: false,
    download: false,
    elevation: 1,
    selectableRows: "none",
  };



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="checkout_table" style={{display: "flex",  justifyContent: "space-between",  flexWrap: "wrap"}}>
        <div className="order_table "style={{backgroundColor: "white"}}>
          {isLoading ? (
            <div style={{placeItems: "center"}}>
              <LoadingSpinner />
            </div>
          ) : (
            <MUIDataTable
              className="table-center"
              data={Datas}
              columns={columns}
              options={options}
            />
          )}
        </div>
        <div className="additional_info" style={{backgroundColor: "white"}}>
          <div style={{margin: "2rem"}}>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
              <h2>Additional Information</h2>
              <p>{info}</p>
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
          </div>
        </div>
        </div>
    </React.Fragment>
  );
}

export default OrderTable;

