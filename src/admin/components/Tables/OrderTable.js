import React, {useContext, useState, useEffect} from 'react'

import { NavLink } from 'react-router-dom';
import { Button } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../../shared/components/TableElements/DataTable.css';


import Modal from '../../../shared/components/UIElements/Modal'
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import DataTable from '../../../shared/components/TableElements/DataTable';

const OrderTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [thisOrder, setThisOrder] =  useState('');
  const [Datas, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/orders`,
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


  const deleteHandler = async oid => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/orders/${oid}`,
        'DELETE',
        null,
        { 
          Authorization: 'Bearer ' + auth.token 
        }
      );
      setData(prevDatas => {
        return prevDatas.filter((order) => {
          return order._id !== oid
        })
      })
    } catch (err) {}
  }


  const showWarning = row => {
    setThisOrder(row)
    setShowConfirmModal(true)
  }

  const cancelDelete = () => {
    setShowConfirmModal(false)
  }

  const confirmDelete = () => {
    setShowConfirmModal(false)
    deleteHandler(thisOrder);
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
      options: {
        sortCompare: (order) => {
          return (obj1, obj2) => {
            let val1 = Date.parse(obj1.data);
            let val2 = Date.parse(obj2.data);
            return (val1 - val2) * (order === 'asc' ? 1 : -1);
          };
        }
      }
    },
    {
      name: "hq",
      label: "HQ",
      options: {
        customBodyRender: (value) => {
          return (
           value.name
          )
        },
        sortCompare: (order) => {
          return (obj1, obj2) => { 
            let val1 = obj1.data.name;
            let val2 = obj2.data.name;
            return (val1.localeCompare(val2)) * (order === 'asc' ? 1 : -1)
          }
        }
      }
    },
    {
      name: "branch",
      label: "Branch",
      options: {
        customBodyRender: (value) => {
          return (
           value.name
          )
        },
        sortCompare: (order) => {
          return (obj1, obj2) => { 
            let val1 = obj1.data.name;
            let val2 = obj2.data.name;
            return (val1.localeCompare(val2)) * (order === 'asc' ? 1 : -1)
          }
        }
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
                startIcon={<InfoIcon />}
                style={{marginRight: "5%"}}
                component={NavLink} to={`/admin/orders/${tableMeta.rowData[0]}`}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="default"
                startIcon={<DeleteIcon />}
                style={{margin: "0"}}
                onClick={ () =>
                  showWarning(tableMeta.rowData[0])
                }
              >
                Delete
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
    selectableRows: "none",
    sortOrder: {
      name: "date",
      direction: "desc"
    },
    elevation: 1,
  };



  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDelete}
        header="Are you sure?" 
        footerClass="logout__modal-actions" 
        footer={
          <React.Fragment>
            <Button variant="contained" onClick={cancelDelete} > Cancel </Button>
            <Button variant="contained" onClick={confirmDelete} > Delete Order </Button>
          </React.Fragment>
        }
      >
       <p>Are you sure you want to delete this Order? This will delete all associated orderlines.</p>
      </Modal>
      <DataTable
        height="62.5rem"
        error={error}
        clearError={clearError}
        isLoading={isLoading}
        Datas={Datas}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}

export default OrderTable;





