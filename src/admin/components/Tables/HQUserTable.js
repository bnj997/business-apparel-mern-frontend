import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQUserModal from '../../../admin/components/Forms/HQUserModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';

const HQUserTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '', '']);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchUsersForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/users/${hqID}`
        );
        console.log(responseData.users)
        setData(responseData.users);
      } catch (err) {}
    };
    fetchUsersForHQ();
  }, [sendRequest, hqID])


  const addUser = async newData => {
    try {
      await sendRequest(
        `http://localhost:5000/api/users/${hqID}`,
        'POST',
        JSON.stringify({
          _id: newData._id,
          hq: hqID,
          branch: newData.branch,
          username: newData.username,
          email: newData.email,
          password: newData.password
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
    exitModal()
  }

  const editUser = async (currentData, uId) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/users/${hqID}/${uId}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          hq: hqID,
          branch: currentData.branch,
          username: currentData.username,
          email: currentData.email,
          password: currentData.password
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(user => user._id === uId )] = currentData
        return prevDatas
      });
    } catch (err) {}
    exitModal()
  }

  const deleteUser = async uId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/users/${hqID}/${uId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return prevDatas.filter((user) => {
          return user._id !== uId
        })
      })
    } catch (err) {}
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

  

  const columns = [
    {
      name: "_id",
      options: {
        display: false,
      },
      label: "ID",
    },
    {
      name: "branch",
      label: "Branch",
    },
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "password",
      label: "Password",
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
                  deleteUser(tableMeta.rowData[0])
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
      <HQUserModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onAdd={addUser}
        onEdit={editUser}
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
          title="User List"
          className="table-center"
          data={Datas}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
}

export default HQUserTable;
