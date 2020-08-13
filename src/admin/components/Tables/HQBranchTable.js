import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQBranchModal from '../../../admin/components/Forms/HQBranchModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';

const HQBranchTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [rowData, setRowData] = useState(['', '', '', '', '']);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchBranchesForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/branches/${hqID}`
        );
        setData(responseData.branches);
      } catch (err) {}
    };
    fetchBranchesForHQ();
  }, [sendRequest, hqID])


  const addBranches = async newData => {
    try {
      await sendRequest(
        `http://localhost:5000/api/branches/${hqID}`,
        'POST',
        JSON.stringify({
          _id: newData._id,
          name: newData.name,
          telephone: newData.telephone,
          address: newData.address,
          email: newData.email,
          hq: hqID
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return [...prevDatas, newData];
      });
    } catch (err) {}
    exitModal()
  }

  const editBranch = async (currentData, bid) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/branches/${hqID}/${bid}`,
        'PATCH',
        JSON.stringify({
          _id: currentData._id,
          name: currentData.name,
          telephone:  currentData.telephone,
          address: currentData.address,
          email: currentData.email,
          hq: hqID
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        prevDatas[prevDatas.findIndex(branch => branch._id === bid )] = currentData
        return prevDatas
      });
    } catch (err) {}
    exitModal()
  }

  const deleteBranch = async bId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/branches/${hqID}/${bId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return prevDatas.filter((branch) => {
          return branch._id !== bId
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
                  deleteBranch(tableMeta.rowData[0])
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
      <HQBranchModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onAdd={addBranches}
        onEdit={editBranch}
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
          title="Branch List"
          className="table-center"
          data={Datas}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
}

export default HQBranchTable;


