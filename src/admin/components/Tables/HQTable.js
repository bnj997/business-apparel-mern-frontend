import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQModal from '../../../admin/components/Forms/HQModal';


const HQTable = props => {

  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(["","", "", "", ""]);

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  function showModal() {
    setShowAddEditModal(true)
  }

  function exitModal() {
    setRowData(["","", "", "", ""])
    setShowAddEditModal(false)
  }

  function setEditModeHandler(data, rowIndex) {
    data.push(rowIndex)
    setRowData(data)
    setIsEditing(true)
    showModal()
  }


  function addData(newData) {
    setData(prevDatas => {
      return [...prevDatas, newData];
    });
    exitModal()
  }

  function editData(currentData, rowIndex) {
    setData(prevDatas => {
      prevDatas[rowIndex] = currentData
      return (prevDatas)
    });
    setIsEditing(false)
    exitModal()
  }

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "HQImg",
      label: "Image",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <img
            alt="organisation logo"
            src={value}
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
      <HQModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onEdit={editData}
        onAdd={addData}
        onCancel={exitModal}
      /> 
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

export default HQTable;





