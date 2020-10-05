import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';

import '../../../shared/components/TableElements/DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import HQBranchModal from '../../../admin/components/Forms/HQBranchModal';
import Modal from '../../../shared/components/UIElements/Modal'


import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import DataTable from '../../../shared/components/TableElements/DataTable';

const HQBranchTable = props => {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '', '', '']);

  const [thisBranch, setThisBranch] =  useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchBranchesForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/branches/${hqID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.branches);
      } catch (err) {}
    };
    fetchBranchesForHQ();
  }, [sendRequest, hqID, auth.token])


  const addBranches = async newData => {
    exitModal()
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/branches/${hqID}`,
        'POST',
        JSON.stringify({
          _id: newData._id,
          name: newData.name,
          telephone: newData.telephone,
          address: newData.address,
          email: newData.email,
          hq: hqID
        }),
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      setData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
  }

  const editBranch = async (currentData, bid) => {
    exitModal()
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/branches/${hqID}/${bid}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          name: currentData.name,
          telephone:  currentData.telephone,
          address: currentData.address,
          email: currentData.email,
          hq: hqID
        }),
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(branch => branch._id === bid )] = currentData
        return prevDatas
      });
    } catch (err) {}
  }

  const deleteBranch = async bId => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/branches/${hqID}/${bId}`,
        'DELETE',
        null,
        { 
          Authorization: 'Bearer ' + auth.token
        }
      );
      setData(prevDatas => {
        return prevDatas.filter((branch) => {
          return branch._id !== bId
        })
      })
    } catch (err) {}
  }

  const showWarning = row => {
    setThisBranch(row)
    setShowConfirmModal(true)
  }

  const cancelDelete = () => {
    setShowConfirmModal(false)
  }

  const confirmDelete = () => {
    setShowConfirmModal(false)
    deleteBranch(thisBranch);
  }


  const showModal = () => {
    setShowAddEditModal(true)
  }

  const exitModal = () => {
    setShowAddEditModal(false)
    setIsEditing(false)
    setRowData(['', '', '', '', ''])
  }

  const setEditModeHandler = data => {
    setRowData(data)
    setIsEditing(true)
    showModal()
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
      name: "name",
      label: "Name",
    },
    {
      name: "telephone",
      label: "telephone",
    },
    {
      name: "address",
      label: "address",
    },
    {
      name: "email",
      label: "email",
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
            <Button variant="contained" onClick={confirmDelete} > Delete Branch </Button>
          </React.Fragment>
        }
      >
       <p>Are you sure you want to delete this branch? This will delete all associated users.</p>
      </Modal>

      <HQBranchModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onAdd={addBranches}
        onEdit={editBranch}
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

export default HQBranchTable;


