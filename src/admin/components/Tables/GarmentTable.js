import React, {useState} from 'react'

import './OrderTable.css';
import { Button} from "@material-ui/core";
import { garments } from '../Tables/garmentsData';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Garment from '../Forms/Garment';

import MUIDataTable from "mui-datatables";
import Modal from '../../../shared/components/UIElements/Modal';


const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "garmentImg",
    label: "Image",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "styleNum",
    label: "StyleNum",
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



const GarmentTable = props => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function showWarning() {
    setShowConfirmModal(true)
  }
  function cancelLogout() {
    setShowConfirmModal(false)
  }

  function confirmLogout() {
    
    setShowConfirmModal(false)
  }

  const options = {
    tableBodyHeight: props.height,
    rowsPerPage: 10,
    print: false,
    download: false,
    elevation: 1,

    // onRowClick: (rowData, rowMeta) => {
    //   console.log("----RowClick");
    //   console.log("rowData: ", rowData);
    // }
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
      <Modal 
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
      >
        <Garment />
      </Modal>
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