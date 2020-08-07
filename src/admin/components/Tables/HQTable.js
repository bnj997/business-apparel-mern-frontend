import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQModal from '../../../admin/components/Forms/HQModal';

import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';


const HQTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '']);

  useEffect(() => {
    const fetchHQs = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/hqs`
        );
        setData(responseData.hqs);
      } catch (err) {}
    };
    fetchHQs();
  }, [sendRequest])



  function showModal() {
    setShowAddEditModal(true)
  }

  function exitModal() {
    setShowAddEditModal(false)
    setIsEditing(false)
    setRowData(['', '', '', ''])
  }

  function setEditModeHandler(data) {
    setRowData(data)
    setIsEditing(true)
    showModal()
  }


  async function addData(newData) {
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

  async function editData(currentData, hqId) {
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

  async function deleteHandler(hqId) {
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
    // {
    //   name: "HQImg",
    //   label: "Image",
    //   options: {
    //     sort: false,
    //     customBodyRender: (value) => (
    //       <img
    //         alt="organisation logo"
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
      name: "telephone",
      label: "Telephone",
    },
    {
      name: "email",
      label: "Email",
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
                component={NavLink} to={`/admin/${tableMeta.rowData[0]}`}
              >
                View
              </Button>
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
      <HQModal
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
          title="HQ List"
          className="table-center"
          data={Datas}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
}

export default HQTable;





