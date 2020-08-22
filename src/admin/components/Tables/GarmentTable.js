import React, {useContext, useState, useEffect} from 'react'

import './DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';


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
          `http://localhost:5000/api/garments`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        console.log(responseData.garments)
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
      await sendRequest( 'http://localhost:5000/api/garments','POST', formData, { 
        Authorization: 'Bearer ' + auth.token
      });
      // setData(prevDatas => {
      //   return [...prevDatas, newData];
      // });
      setRequest(!request)
    } catch (err) {}
    exitModal()
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


      await sendRequest(`http://localhost:5000/api/garments/${gid}`, 'PATCH', formData, { 
        Authorization: 'Bearer ' + auth.token 
      });
      // setData(prevDatas => {
      //   prevDatas[prevDatas.findIndex(garment => garment._id === gid )] = currentData
      //   return prevDatas
      // });
      setRequest(!request)
    } catch (err) {}
  }

  const deleteHandler = async gId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/${gId}`,
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
            src={`http://localhost:5000/${value}`}
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
    },
    {
      name: "sizes",
      label: "Sizes",
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
                Edit
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
                delete
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

      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      <MUIDataTable
        title="Garments"
        className="table-center"
        data={Datas}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}

export default GarmentTable;

