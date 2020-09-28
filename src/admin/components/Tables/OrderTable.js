import React, {useContext, useState, useEffect} from 'react'

import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import '../../../shared/components/TableElements/DataTable.css';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';

const OrderTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
      options: {
        customBodyRender: (value) => {
          return (
           value.name
          )
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
      <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
      {isLoading ? (
        <div style={{placeItems: "center"}}>
          <LoadingSpinner />
        </div>
      ) : (
        <div style={{position:'relative'}}>
          <MUIDataTable
            className="table-center"
            data={Datas}
            columns={columns}
            options={options}
          />
        </div>
      )}     
    </React.Fragment>
  );
}

export default OrderTable;





