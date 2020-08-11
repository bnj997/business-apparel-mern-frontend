import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';


const GarmentTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(["", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]);

  useEffect(() => {
    const fetchGarments = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments`
        );
        setData(responseData.garments);
      } catch (err) {}
    };
    fetchGarments();
  }, [sendRequest])


  const showModal = () => {
    setShowAddEditModal(true)
  }

  const exitModal = () => {
    setShowAddEditModal(false)
    setIsEditing(false)
    setRowData(["", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]])
  }

  const setEditModeHandler = data => {
    setRowData(data)
    setIsEditing(true)
    showModal()
  }


  const addData = async newData => {
    try {
      await sendRequest(
        'http://localhost:5000/api/garments',
        'POST',
        JSON.stringify({
          _id: newData._id,
          styleNum: newData.styleNum,
          name: newData.name,
          price: newData.price,
          category: newData.category,
          supplier: newData.supplier,
          description: newData.description,
          colours: newData.colours,
          sizes: newData.sizes,
          hqs: []
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
    exitModal()
  }


  const editData = async (currentData, gid) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/${gid}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          styleNum: currentData.styleNum,
          name:  currentData.name,
          price: currentData.price,
          category: currentData.category,
          supplier: currentData.supplier,
          description: currentData.description,
          colours:  currentData.colours,
          sizes:  currentData.sizes,
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(garment => garment._id === gid )] = currentData
        return prevDatas
      });
    } catch (err) {}
    exitModal()
  }

  const deleteHandler = async gId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/${gId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
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
      name: "styleNum",
      label: "StyleNum",
    },
    // {
    //   name: "garmentImg",
    //   label: "Image",
    //   options: {
    //     sort: false,
    //     customBodyRender: (value) => (
    //       <img
    //         alt="garment display"
    //         src={value}
    //         > 
    //       </img>
    //     )
    //   }
    // },
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

