import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import './DataTable.css';
import { NavLink } from 'react-router-dom';
import { Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import MUIDataTable from "mui-datatables";
import HQGarmentModal from '../../../admin/components/Forms/HQGarmentModal';

import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';



const HQGarmentTable = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Datas, setData] = useState([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  const hqID = useParams().hqId;

  useEffect(() => {
    const fetchGarmentsForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/garments/hq/${hqID}`
        );
        setData(responseData.garments);
      } catch (err) {}
    };
    fetchGarmentsForHQ();
  }, [sendRequest, hqID])


  const addGarments= async garments => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/hq/${hqID}`,
        'PATCH',
        JSON.stringify({
          garments
        }),
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        for (var i = 0; i < garments.length; i++) {
          prevDatas.push(garments[i])
        }
        return prevDatas;
      });
    } catch (err) {}

    exitModal()
  }

  const deleteHandler = async gId => {
    try {
      await sendRequest(
        `http://localhost:5000/api/garments/hq/${hqID}/${gId}`,
        'PATCH',
        { 'Content-Type': 'application/json' }
      );
      setData(prevDatas => {
        return prevDatas.filter((garment) => {
          return garment._id !== gId
        })
      })
    } catch (err) {}
  }


  const showModal = () => {
    setShowAddEditModal(true)
  }
  const exitModal = () => {

    setShowAddEditModal(false)
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
                startIcon={<DeleteIcon />}
                style={{margin: "0"}}
                onClick={ () =>
                  deleteHandler(tableMeta.rowData[0])
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
      <HQGarmentModal
        show={showAddEditModal}
        onAdd={addGarments}
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
          title="Garment List"
          className="table-center"
          data={Datas}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
}

export default HQGarmentTable;

