import { Paper } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React from 'react'
import ErrorModal from '../UIElements/ErrorModal';
import LoadingSpinner from '../UIElements/LoadingSpinner';


const DataTable = props => {
  return (
    <React.Fragment>
      <ErrorModal header="An Error Occured" error={props.error} onClear={props.clearError} />
      {props.isLoading && (
        <div>
          <Paper style={{width: '100%', height: props.height, display: "grid", placeItems: "center"}}>
            <LoadingSpinner />
          </Paper>
        </div>
      )}
       {!props.isLoading && (
        <MUIDataTable
          className="table-center"
          data={props.Datas}
          columns={props.columns}
          options={props.options}
        />
      )}
    </React.Fragment>
  );
}

export default DataTable;