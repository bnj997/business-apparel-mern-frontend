import React, {useState} from 'react'

import './OrderTable.css';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import GarmentModal from '../Forms/GarmentModal';

import MUIDataTable from "mui-datatables";


const GarmentTable = props => {
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(undefined);

  function showWarning() {
    setInfo(undefined)
    setShowConfirmModal(true)
  }
  
  function setEditModeHandler(data, rowIndex) {
    data.push(rowIndex)
    setInfo(data)
    setIsEditing(true)
    setShowConfirmModal(true)
  }

  function cancelLogout() {
    setInfo(undefined)
    setIsEditing(false)
    setShowConfirmModal(false)
  }


  const columns = [
    {
      name: "styleNum",
      label: "StyleNum",
    },
    {
      name: "garmentImg",
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
              >
                delete
              </Button>
            </React.Fragment>
          )
        }
      }
    }
  ]

  const [garments, setGarment] = useState([]);

  function addGarment(newGarment) {
    setGarment(prevGarments => {
      return [...prevGarments, newGarment];
    });
    setShowConfirmModal(false)
  }

  function editGarment(currentGarment, rowIndex) {
    setGarment(prevGarments => {
      prevGarments[rowIndex] = currentGarment
      return (prevGarments)
    });
    setShowConfirmModal(false)
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
          onClick={showWarning}
        > 
          New Item
        </Button>
      );
    },
  };
  return (
    <React.Fragment>
      {/* <Modal 
        show={showConfirmModal}
        onCancel={cancelLogout}
        header="Add new Entry?" 
        footerClass="place-item__modal-actions" 
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelLogout}> ADD GARMENT </Button>
            <Button danger onClick={confirmLogout}> CANCEL </Button>
          </React.Fragment>
        }
      > */}

        <GarmentModal
          isEditing={isEditing}
          rowData={info}
          show={showConfirmModal}
          onEdit={editGarment}
          onAdd={addGarment}
          onCancel={cancelLogout}
        />

      {/* </Modal> */}
      <MUIDataTable
        title={"Garments"}
        className="table-center"
        data={garments}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}

export default GarmentTable;