import React, {useContext, useState, useEffect} from 'react'

import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import Modal from '../../shared/components/UIElements/Modal'

import '../pages/ClientCart.css'


import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/components/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const OrderTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [Datas, setData] = useState([]);
  const [showOrderAddModal, setShowOrderAddModal] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/orders/user/${auth.userId}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.orders);
      } catch (err) {}
    };
    fetchOrders();
  }, [sendRequest, auth.token])



  const showModal = () => {
    setShowOrderAddModal(true)
  }

  const exitModal = () => {
    setShowOrderAddModal(false)
  }

  const columns = [
    {
      name: "_id",
      options: {
        display: false,
      },
      label: "ID",
    },
    {
      name: "date",
      label: "Order Date",
    },
    {
      name: "hq",
      label: "HQ",
    },
    {
      name: "branch",
      label: "Branch",
    },
    {
      name: "status",
      label: "Status",
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
                startIcon={<InfoIcon />}
                style={{marginRight: "5%"}}
                component={NavLink} to={`/${auth.username}/orders/${tableMeta.rowData[0]}`}
              >
                View
              </Button>
            </React.Fragment>
          )
        }
      }
    }
  ]

  const options = {
    tableBodyHeight: "55rem",
    rowsPerPage: 10,
    print: false,
    download: false,
    elevation: 1,
  };



  return (
    <React.Fragment>
      {/* <Modal
        show={showOrderAddModal}
        onCancel={exitModal}
        header="Your order has been successfully processed." 
        footerClass="logout__modal-actions" 
        footer={
          <React.Fragment>
            <Button variant="contained" onClick={exitModal} > Okay </Button>
          </React.Fragment>
        }
      >
       <p>Your order has been confirmed and is on its way!</p>
      </Modal> */}


      <ErrorModal error={error} onClear={clearError} />
      <div style={{position:'relative'}}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <MUIDataTable
            className="table-center"
            data={Datas}
            columns={columns}
            options={options}
          />
        )}
      </div>

      
     
    </React.Fragment>
  );
}

export default OrderTable;





