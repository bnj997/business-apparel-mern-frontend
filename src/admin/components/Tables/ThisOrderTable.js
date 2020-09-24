import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import MUIDataTable from "mui-datatables";
import '../../../shared/components/TableElements/ClientCart.css';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';



const ThisOrderTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [totalPrice, setTotalPrice] = useState(0.00)
  const orderID = useParams().oid;

  const [Datas, setData] = useState([]);
  const [info, setInfo] = useState('');
  const [hq, setHQ] = useState('');
  const [branch, setBranch] = useState('');

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
        setInfo(responseData.order);
        setHQ(responseData.order.hq.name);
        setBranch(responseData.order.branch.name);
      } catch (err) {}

    };
    fetchOrderLines();
  }, [sendRequest, auth.token, orderID])

  
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
          <p>{`$${value.toFixed(2)}`}</p>
        )
      }
    },
    {
      name: "subtotal",
      label: "Subtotal",
      options: {
        customBodyRender: (value) => (
          <p>{`$${value.toFixed(2)}`}</p>
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
      <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
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
              <h2>User Information:</h2>
              <div className="calculations" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                  <h3>HQ:</h3>
                  <h3>Branch: </h3>
                </div>
                <div>
                  <h3 style={{fontWeight: "normal"}}>{hq}</h3>
                  <h3 style={{fontWeight: "normal"}}>{branch}</h3>
                </div>
              </div>
            </div>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
              <h2>Additional Information:</h2>
              <p>{info.info}</p>
            </div>
            <div className="calculations" style={{marginTop: "2rem", marginBottom: "2rem" }}>
              <h2>Payment Due:</h2>
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

export default ThisOrderTable;
