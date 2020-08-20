import React, {useContext, useState, useEffect} from 'react'

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQModal from '../../../admin/components/Forms/HQModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';



const HQTable = props => {
  const auth = useContext(AuthContext);

  // const axios = require('axios');

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  //const [isLoading, setLoading] = useState(false)
  // const [isError, setError] = useState("")

  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '']);

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
    // const fetchHQs = async () => {
    //   setLoading(true)
    //   await axios
    //     .get('http://localhost:5000/api/hqs')
    //     .then(res => setData(res.data.hqs))
    //     .catch(err => console.log(err.message))
    //   setLoading(false)
    // };
    //fetchHQs();
  }, [sendRequest, auth.token])



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
      await sendRequest(
        'http://localhost:5000/api/hqs',
        'POST',
        JSON.stringify({
          _id: newData._id,
          name: newData.name,
          telephone: newData.telephone,
          email: newData.email,
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
        { 
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(hq => hq._id === hqId )] = currentData
        return prevDatas
      });
    } catch (err) {}
    exitModal()
  }

  // const editData = async (currentData, hqId) => {
  //   //setLoading(true)
  //   await axios.patch(`http://localhost:5000/api/hqs/${hqId}`, {
  //     _id: currentData._id,
  //     name: currentData.name,
  //     telephone: currentData.telephone,
  //     email: currentData.email,
  //   })
  //   .then(
  //     setData(prevDatas => {
  //       prevDatas[prevDatas.findIndex(hq => hq._id === hqId )] = currentData
  //       return prevDatas
  //     })
  //   )
  //   .catch(err => console.error(err))
  //   //setLoading(false)
  //   exitModal()
  // }

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

  // const deleteHandler = async hqId => {
  //   //setLoading(true)
  //   await axios.delete(`http://localhost:5000/api/hqs/${hqId}`)
  //     .then(
  //       setData(prevDatas => {
  //         return prevDatas.filter((hq) => {
  //           return hq._id !== hqId
  //         })
  //       })
  //     )
  //     .catch(err => console.error(err))
  //   //setLoading(false)
  // }

  
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





