import React, {useContext, useEffect, useState } from 'react';

import { Formik, Form} from 'formik';
import { Button } from "@material-ui/core";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { useParams } from 'react-router-dom';

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import Modal from '../../../shared/components/UIElements/Modal';
import FormRadio from '../../../shared/components/FormElements/FormRadio';
import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal';




const validationSchema = yup.object({
  branch: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});


const HQUserModal = props => {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [branches, setBranches] = useState([])
  const hqID = useParams().hqId;


  useEffect(() => {
    const fetchBranchesForHQ = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/branches/${hqID}`,
          'GET',
          null,
          {
            Authorization: 'Bearer ' + auth.token
          }
        );
        setBranches(responseData.branches);
      } catch (err) {}
    };
    fetchBranchesForHQ();
  }, [sendRequest, hqID, auth.token])


  const { v4: uuidv4 } = require('uuid');
  var id;
  if (!props.isEditing) {
    id = uuidv4();
  } else {
    id = props.rowData[0];
  }
  
  return (
    <Modal 
      className="form_modal"
      height="64vh"
      show={props.show}
      onCancel={props.onCancel}
      header={props.isEditing ? "Edit User" : "Add New User"}
    >

      <Formik 
        initialValues={{
          _id: id,
          branch: props.rowData[1]._id,
          username: props.rowData[2],
          email: props.rowData[3],
          password: props.rowData[4],
        }}
        validationSchema={validationSchema}
        onSubmit={ async (data, {setSubmitting, resetForm}) =>  {
          setSubmitting(true)
         
          // make async call
          if (!props.isEditing) {
            props.onAdd(data)
          } else {
            props.onEdit(data, props.rowData[0])
          }
         
          setSubmitting(false)
          resetForm();
        }}
      >
        {({values, isSubmitting}) => (
          <Form >
            <FormLabel component="legend" className="form_label">Supplier</FormLabel>
            <RadioGroup row aria-label="Branches" className="form_group">

              <ErrorModal header="An Error Occured" error={error} onClear={clearError} />
              {isLoading ? (
                <div style={{placeItems: "center"}}>
                  <LoadingSpinner />
                </div>
              ) : (
                branches.map(function(item){
                  return (
                    <FormRadio 
                      key={item.name}
                      name="branch" 
                      value={item._id}
                      type="radio" 
                      label={item.name}
                      variant={props.type}
                    />
                    )
                })
              )}     
            </RadioGroup >

            {["username", "email",  "password"].map(function(item, i){
              return (
                <FormTextField 
                  variant={props.type}
                  key={i}
                  placeholder={item.charAt(0).toUpperCase() + item.slice(1)} 
                  name={item}  
                  type="input"
                />
              )
            })}
            <Button disabled={isSubmitting} type="submit" variant="contained" style={{width: "100%", marginTop: "3%", padding: "1rem"}}>{props.isEditing ? `Submit changes` : `Add Item`}</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default HQUserModal;
