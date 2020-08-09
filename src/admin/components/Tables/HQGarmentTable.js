import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';



const HQGarmentTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(["", "", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchGarmentsForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments/hq/${hqID}`
        );
        setData(responseData.garments);
      } catch (err) {}
    };
    fetchGarmentsForHQ();
  }, [sendRequest, hqID])



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
        'http://localhost:5000/api/hqs',
        'POST',
        JSON.stringify({
          _id: newData._id,
          name: newData.name,
          telephone: newData.telephone,
          email: newData.email,
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
    exitModal()
  }

  const editData = async (currentData, hqId) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/hqs/${hqId}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          name: currentData.name,
          telephone: currentData.telephone,
          email: currentData.email,
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(hq => hq._id === hqId )] = currentData
        return prevDatas
      });
    } catch (err) {}
    exitModal()
  }

  const deleteHandler = async hqId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/hqs/${hqId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return prevDatas.filter((hq) => {
          return hq._id !== hqId
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
                  setEditModeHandler(tableMeta.rowData, tableMeta.rowIndex )
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
                  setData(prevDatas => {
                    console.log("wat")
                    return prevDatas.filter((item, index) => {
                      return index !== tableMeta.rowIndex
                    })
                  })
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
       {!isLoading && (
        <MUIDataTable
          title="Garment List"
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

