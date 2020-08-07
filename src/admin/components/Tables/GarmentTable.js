import React, {useState, useEffect} from 'react'

import './DataTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";
import GarmentModal from '../../../admin/components/Forms/GarmentModal';


const GarmentTable = props => {

  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState(["", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]]);

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  function showModal() {
    setShowAddEditModal(true)
  }

  function exitModal() {
    setRowData(["", "", "", "", "Biz Collection", "", ["Black", "Navy"], ["N/A"]])
    setShowAddEditModal(false)
  }

  function setEditModeHandler(data, rowIndex) {
    data.push(rowIndex)
    setRowData(data)
    setIsEditing(true)
    showModal()
  }


  async function addData(newData) {
    
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
      name: "styleNum",
      label: "StyleNum",
    },
    // {
    //   name: "garmentImg",
    //   label: "Image",
    //   options: {
    //     sort: false,
    //     customBodyRender: (value) => (
    //       <img
    //         alt="garment display"
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
      name: "price",
      label: "Price",
    },
    {
      name: "category",
      label: "Category",
    },
    {
      name: "supplier",
      label: "Supplier",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "colours",
      label: "Colours",
    },
    {
      name: "sizes",
      label: "Sizes",
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
      <GarmentModal
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

export default GarmentTable;

