import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';


const DataTable = props => {
  const [column, setColumn] = useState([])
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(props.defaultValueArray);

  
  useEffect(() => {
    const columns = props.columns
    columns.push (
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
                      return prevDatas.filter((index) => {
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
  }, [props.columns, props.height])


  function showModal() {
    setShowAddEditModal(true)
  }

  function exitModal() {
    setRowData(props.defaultValueArray)
    setIsEditing(false)
    setShowAddEditModal(false)
  }

  function setEditModeHandler(data, rowIndex) {
    data.push(rowIndex)
    setRowData(data)
    setIsEditing(true)
    setShowAddEditModal(true)
  }


  function addData(newData) {
    setData(prevDatas => {
      return [...prevDatas, newData];
    });
    setShowAddEditModal(false)
  }

  function editData(currentData, rowIndex) {
    setData(prevDatas => {
      prevDatas[rowIndex] = currentData
      return (prevDatas)
    });
    setShowAddEditModal(false)
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
      <GarmentModal
        isEditing={isEditing}
        rowData={rowData}
        show={showAddEditModal}
        onEdit={editData}
        onAdd={addData}
        onCancel={exitModal}
      />

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