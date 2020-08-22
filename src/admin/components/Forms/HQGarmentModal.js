import React, {useContext, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

import Modal from '../../../shared/components/UIElements/Modal';
import { Button} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import EditIcon from '@material-ui/icons/Edit';

import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';


const HQGarmentModal = props => {
  const auth = useContext(AuthContext);
  const hqID = useParams().hqId;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [GarmentsAvailable, setGarmentsAvailable] = useState([]);
  const [GarmentsToAdd, setGarmentsToAdd] = useState([]);

  useEffect(() => {
    const fetchAvailableGarmentsForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments/hq/${hqID}/available`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setGarmentsAvailable(responseData.garments);
      } catch (err) {}
    };
    fetchAvailableGarmentsForHQ();
  }, [sendRequest, hqID, auth.token])


  const addGarmentToAdd = row => {
    var garmentObj = {
      _id: row[0],
      styleNum: row[1], 
      name: row[2], 
      price: row[3], 
      category: row[4], 
      supplier: row[5],
      description: row[6],
      colours: row[7],
      sizes: row[8],
    }
    setGarmentsAvailable(prevGarments => {
      return prevGarments.filter((garment) => {
        return garment._id !== row[0]
      })
    })
    setGarmentsToAdd(prevGarmentIDsToAdd => {
      return [...prevGarmentIDsToAdd, garmentObj];
    });
  }

  const removeGarmentFromAdd = row => {
    setGarmentsAvailable(prevGarments => {
      return [...prevGarments, row];
    });
    setGarmentsToAdd(prevGarmentIDsToAdd => {
      return prevGarmentIDsToAdd.filter((garment) => {
        return garment._id !== row._id
      })
    })
  }

  const addToTable = (data) => {
    setGarmentsToAdd([])
    props.onAdd(data)
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
      options: {
        display: false,
      },
      label: "Category",
    },
    {
      name: "supplier",
      label: "Supplier",
    },
    {
      name: "description",
      options: {
        display: false,
      },
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
                  addGarmentToAdd(tableMeta.rowData)
                }
              >
                Add
              </Button>
            </React.Fragment>
          )
        }
      }
    }
  ]

  const options = {
    tableBodyHeight: "23rem",
    selectableRows: "none",
    rowsPerPage: 10,
    print: false,
    filter: false,
    download: false,
    elevation: 0,
  };

  

  return (
    <Modal 
      className="form_modal"
      height="64vh"
      show={props.show}
      onCancel={props.onCancel}
      header="Add garments to HQ"
      footer={
        <Button 
          type="submit"
          onClick= { () =>
            addToTable(GarmentsToAdd)
          }
        >
          Confirm add
        </Button>}
    >

      <h2> Added Styles: </h2>
      <div style={{display: "flex"}}>
        {GarmentsToAdd.map(function(item, i){
          return (
            <div style={{display: "flex",  alignItems: "center"}}>
              <p key={i}>{item.styleNum}</p>
              <button 
                variant="contained"
                onClick={ () =>
                  removeGarmentFromAdd(item)
                }
              >
                  Remove
              </button>

            </div>        
          )
        })}
      </div>
      <MUIDataTable
        data={GarmentsAvailable}
        columns={columns}
        options={options}
      />



    </Modal>
)

}

export default HQGarmentModal;