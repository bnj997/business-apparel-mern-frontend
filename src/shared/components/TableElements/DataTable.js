import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';
import HQModal from '../../../admin/components/Forms/HQModal';


const DataTable = props => {

  const [column, setColumn] = useState([])
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(props.defaultValueArray);

  useEffect(() => {
    const columns = props.columns
    setData(props.data)
    columns.push (
      {
        name: "actions",
        label: "Actions",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <React.Fragment>
                {props.ownPage  &&
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<InfoIcon />}
                    style={{marginRight: "5%"}}
                    component={NavLink} to={`/admin/${tableMeta.rowData[0]}`}
                  >
                    View
                  </Button>
                }
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
    )
    setColumn(columns)
  }, [props.columns, props.ownPage, props.data])


  function showModal() {
    setShowAddEditModal(true)
  }

  function exitModal() {
    setRowData(props.defaultValueArray)
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

  const options = {
    tableBodyHeight: props.height,
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

      {props.title === "Garments" && (
       <GarmentModal
          isEditing={isEditing}
          rowData={rowData}
          show={showAddEditModal}
          onEdit={editData}
          onAdd={addData}
          onCancel={exitModal}
      /> 
      )}

      {props.title === "Headquarters" && (
       <HQModal
          isEditing={isEditing}
          rowData={rowData}
          show={showAddEditModal}
          onEdit={editData}
          onAdd={addData}
          onCancel={exitModal}
      /> 
      )}

      <MUIDataTable
        title={props.title}
        className="table-center"
        data={Datas}
        columns={column}
        options={options}
      />

    </React.Fragment>
  );
}

export default DataTable;