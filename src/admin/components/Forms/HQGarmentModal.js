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
  }, [sendRequest, hqID, auth.token, props.request])


  const addGarmentToAdd = row => {
    var garmentObj = {
      _id: row[0],
      image: row[1],
      styleNum: row[2], 
      name: row[3], 
      price: row[4], 
      category: row[5], 
      supplier: row[6],
      description: row[7],
      colours: row[8],
      sizes: row[9],
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
      name: "image",
      label: "Image",
      options: {
        sort: false,
        customBodyRender: (value) => (
          <img
            style={{width: "50px", height: "75px"}}
            alt="Garment"
            src={`http://localhost:5000/${value}`}
            > 
          </img>
        )
      }
    },
    {
      name: "styleNum",
      label: "StyleNum",
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
      options: {
        customBodyRender: (value) => (
          <p>{`${value}`}</p>
        )
      }
    },
    {
      name: "sizes",
      label: "Sizes",
      options: {
        customBodyRender: (value) => (
          <p>{`${value}`}</p>
        )
      }
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