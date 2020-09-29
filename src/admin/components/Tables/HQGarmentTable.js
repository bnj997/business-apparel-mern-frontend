import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import '../../../shared/components/TableElements/DataTable.css';
import { Button, Paper} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HQGarmentModal from '../../../admin/components/Forms/HQGarmentModal';

import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import DataTable from '../../../shared/components/TableElements/DataTable';



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
          `${process.env.REACT_APP_BACKEND_URL}/garments/hq/${hqID}`,
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
        `${process.env.REACT_APP_BACKEND_URL}/garments/hq/${hqID}`,
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
        `${process.env.REACT_APP_BACKEND_URL}/garments/hq/${hqID}/${gId}`,
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

      <DataTable 
        height="57rem"
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

export default HQGarmentTable;

