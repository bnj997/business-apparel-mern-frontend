import React, {useContext, useState, useEffect} from 'react'

import './DataTable.css';

import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQModal from '../../../admin/components/Forms/HQModal';
import Modal from '../../../shared/components/UIElements/Modal'


import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';



const HQTable = props => {
  const auth = useContext(AuthContext);


  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [thisHQ, setThisHQ] =  useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [request, setRequest] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(['','', '', '', '']);

  useEffect(() => {
    const fetchHQs = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/hqs`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.hqs);
      } catch (err) {}
    };
    fetchHQs();
  }, [sendRequest, auth.token, request])



  const showWarning = row => {
    setThisHQ(row)
    setShowConfirmModal(true)
  }

  const cancelDelete = () => {
    setShowConfirmModal(false)
  }

  const confirmDelete = () => {
    setShowConfirmModal(false)
    deleteHandler(thisHQ);
  }


  const showModal = () => {
    setShowAddEditModal(true)
  }

  const exitModal = () => {
    setShowAddEditModal(false)
    setIsEditing(false)
    setRowData(['', '', '', ''])
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
      formData.append('name', newData.name)
      formData.append('telephone', newData.telephone)
      formData.append('email', newData.email)
      await sendRequest('http://localhost:5000/api/hqs','POST', formData, { 
        Authorization: 'Bearer ' + auth.token 
      });
      // setData(prevDatas => {
      //   return [...prevDatas, newData];
      // });
      setRequest(!request)
    } catch (err) {}
    exitModal()
  }

  const editData = async (currentData, hqId) => {
    try {
      const formData = new FormData();
      formData.append('_id', currentData._id)
      if (typeof currentData.image === 'object') {
        formData.append('image', currentData.image)
      }
      formData.append('name', currentData.name)
      formData.append('telephone', currentData.telephone)
      formData.append('email', currentData.email)
      await sendRequest(
        `http://localhost:5000/api/hqs/${hqId}`,
        'PATCH',
        formData,
        { 
          Authorization: 'Bearer ' + auth.token
        }
      );
      // setData(prevDatas => {
      //   prevDatas[prevDatas.findIndex(hq => hq._id === hqId )] = currentData
      //   return prevDatas
      // });
      setRequest(!request)
    } catch (err) {}
    exitModal()
  }

  const deleteHandler = async hqId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/hqs/${hqId}`,
        'DELETE',
        null,
        { 
          Authorization: 'Bearer ' + auth.token 
        }
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
      name: "image",
      label: "Image",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <img
            style={{width: "50px", height: "75px"}}
            alt="organisation logo"
            src={`http://localhost:5000/${value}`}
            > 
          </img>
        )
      }
    },

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

      <Modal
        show={showConfirmModal}
        onCancel={cancelDelete}
        header="Are you sure?" 
        footerClass="logout__modal-actions" 
        footer={
          <React.Fragment>
            <Button variant="contained" onClick={cancelDelete} > Cancel </Button>
            <Button variant="contained" onClick={confirmDelete} > Delete HQ </Button>
          </React.Fragment>
        }
      >
       <p>Are you sure you want to delete HQ? This will delete all associated users and branches.</p>
      </Modal>

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





