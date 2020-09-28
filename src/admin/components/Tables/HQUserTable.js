import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import '../../../shared/components/TableElements/DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";
import HQUserModal from '../../../admin/components/Forms/HQUserModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';

const HQUserTable = props => {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [request, setRequest] = useState(false);
  const [Datas, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '', '']);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchUsersForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${hqID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setData(responseData.users);
      } catch (err) {}
    };
    fetchUsersForHQ();
  }, [sendRequest, hqID, auth.token, request])


  const addUser = async newData => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${hqID}`,
        'POST',
        JSON.stringify({
          _id: newData._id,
          hq: hqID,
          branch: newData.branch,
          username: newData.username,
          email: newData.email,
          password: newData.password
        }),
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      // setData(prevDatas => {
      //   return [...prevDatas, newData];
      // });
      setRequest(!request)
    } catch (err) {}
    exitModal()
  }

  const editUser = async (currentData, uId) => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${hqID}/${uId}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          hq: hqID,
          branch: currentData.branch,
          username: currentData.username,
          email: currentData.email,
          password: currentData.password
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

  const deleteUser = async uId => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${hqID}/${uId}`,
        'DELETE',
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
      options: {
        customBodyRender: (value) => {
          return (
           value.name
          )
        }
      }
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
      <HQUserModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onAdd={addUser}
        onEdit={editUser}
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

export default HQUserTable;
