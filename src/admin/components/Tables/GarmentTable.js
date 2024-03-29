import React, {useContext, useState, useEffect} from 'react'

import '../../../shared/components/TableElements/DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import GarmentModal from '../../../admin/components/Forms/GarmentModal';

import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import DataTable from '../../../shared/components/TableElements/DataTable';


const GarmentTable = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [request, setRequest] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(["", "", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]);

  useEffect(() => {
    const fetchGarments = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/garments`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.garments);
      } catch (err) {}
    };
    fetchGarments();
  }, [sendRequest, auth.token, request])


  const showModal = () => {
    setShowAddEditModal(true)
  }

  const exitModal = () => {
    setShowAddEditModal(false)
    setIsEditing(false)
    setRowData(["", "", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]])
  }

  const setEditModeHandler = data => {
    setRowData(data)
    setIsEditing(true)
    showModal()
  }


  const addData = async newData => {
    exitModal()
    try {
      const formData = new FormData();
      formData.append('_id', newData._id)
      formData.append('image', newData.image)
      formData.append('styleNum', newData.styleNum)
      formData.append('name', newData.name)
      formData.append('price', newData.price)
      formData.append('category', newData.category)
      formData.append('supplier', newData.supplier)
      formData.append('description', newData.description)
      var colourArr = newData.colours
      var sizesArr = newData.sizes
      for (var i = 0; i < colourArr.length; i++) {
        formData.append('colours', colourArr[i]);
      }
      for (i = 0; i <  sizesArr.length; i++) {
        formData.append('sizes',  sizesArr[i]);
      }

      formData.append('hqs', [])
      await sendRequest( `${process.env.REACT_APP_BACKEND_URL}/garments`,'POST', formData, { 
        Authorization: 'Bearer ' + auth.token
      });
      setRequest(!request)
    } catch (err) {}
  }


  const editData = async (currentData, gid) => {
    exitModal()
    try {
      const formData = new FormData();
      formData.append('_id', currentData._id)
      if (typeof currentData.image === 'object') {
        formData.append('image', currentData.image)
      }
      formData.append('styleNum',  currentData.styleNum)
      formData.append('name',  currentData.name)
      formData.append('price',  currentData.price)
      formData.append('category',  currentData.category)
      formData.append('supplier',  currentData.supplier)
      formData.append('description',  currentData.description)

      var colourArr = currentData.colours
      var sizesArr = currentData.sizes
      for (var i = 0; i < colourArr.length; i++) {
        formData.append('colours', colourArr[i]);
      }
      for (i = 0; i <  sizesArr.length; i++) {
        formData.append('sizes',  sizesArr[i]);
      }


      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/garments/${gid}`, 'PATCH', formData, { 
        Authorization: 'Bearer ' + auth.token 
      });
      setRequest(!request)
    } catch (err) {}
  }

  const deleteHandler = async gId => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/garments/${gId}`,
        'DELETE',
        null,
        { 
          Authorization: 'Bearer ' + auth.token 
        }
      );
      setData(prevDatas => {
        return prevDatas.filter((garment) => {
          return garment._id !== gId
        })
      })
    } catch (err) {}
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
      options: {
        customBodyRender: (value) => (
          value.slice(0, 10)+'...'
        )
      }
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
          <p>{`${value}`.slice(0,12)+'...'}</p>
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
                startIcon={<EditIcon />}
                style={{marginRight: "5%"}}
                onClick={ () =>
                  setEditModeHandler(tableMeta.rowData)
                }
              >
                View/Edit
              </Button>
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
    tableBodyHeight: "55rem",
    rowsPerPage: 10,
    print: false,
    selectableRows: "none",
    download: false,
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
          New Item
        </Button>
      );
    },
  };

  return (
    <React.Fragment>
      <GarmentModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onEdit={editData}
        onAdd={addData}
        onCancel={exitModal}
      /> 

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

export default GarmentTable;

