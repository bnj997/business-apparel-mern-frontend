import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import '../../../shared/components/TableElements/DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MUIDataTable from "mui-datatables";
import HQGarmentModal from '../../../admin/components/Forms/HQGarmentModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';



const HQGarmentTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [request, setRequest] = useState(false);
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchGarmentsForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments/hq/${hqID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.garments);
      } catch (err) {}
    };
    fetchGarmentsForHQ();
  }, [sendRequest, hqID, auth.token, request])


  const addGarments= async garments => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/hq/${hqID}`,
        'PATCH',
        JSON.stringify({
          garments
        }),
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      setRequest(!request)
    } catch (err) {}

    exitModal()
  }

  const deleteHandler = async gId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/hq/${hqID}/${gId}`,
        'PATCH',
        null,
        { 
          Authorization: 'Bearer ' + auth.token 
        }
      );
      setRequest(!request)
    } catch (err) {}
  }


  const showModal = () => {
    setShowAddEditModal(true)
  }
  const exitModal = () => {

    setShowAddEditModal(false)
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
      name: "image",
      label: "Image",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <img
            style={{width: "50px", height: "75px"}}
            alt="Garment"
            src={value}
            > 
          </img>
        )
      }
    },
    {
      name: "styleNum",
      label: "StyleNum",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "price",
      label: "Price",
      options: {
        customBodyRender: (value) => (
          <p>{`$${value.toFixed(2)}`}</p>
        )
      }
    },
    {
      name: "category",
      label: "Category",
    },
    {
      name: "supplier",
      label: "Supplier",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "colours",
      label: "Colours",
      options: {
        customBodyRender: (value) => (
          <p>{`${value}`}</p>
        )
      }
    },
    {
      name: "sizes",
      label: "Sizes",
      options: {
        customBodyRender: (value) => (
          <p>{`${value}`}</p>
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
                  deleteHandler(tableMeta.rowData[0])
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
    tableBodyHeight: "50rem",
    rowsPerPage: 10,
    print: false,
    download: false,
    selectableRows: "none",
    elevation: 1,
    customToolbar: () => {
      return (
        <Button  
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          style={{marginLeft: "2%"}}
          onClick={showModal}
        > 
          Add Garment
        </Button>
      );
    },
  };

  return (
    <React.Fragment>
      <HQGarmentModal
        show={showAddEditModal}
        request={request}
        onAdd={addGarments}
        onCancel={exitModal}
      /> 

      <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
       {!isLoading && (
        <MUIDataTable
          className="table-center"
          data={Datas}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
}

export default HQGarmentTable;

