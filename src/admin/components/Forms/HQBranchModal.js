import React, { useState } from 'react';

import { Formik, Form} from 'formik';
import { Button } from "@material-ui/core";

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import Modal from '../../../shared/components/UIElements/Modal';



const validationSchema = yup.object({
  // HQImg: yup
  //   .mixed().required("An image is required")
  //   .test(
  //     value => value && ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(value.type)
  //   ),
  name: yup.string().required(),
  telephone: yup.number().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
});


const HQBranchModal = props => {
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
      header={props.isEditing ? "Edit Branch" : "Add New Branch"}
    >

      <Formik 
        initialValues={{
          _id: id,
          name: props.rowData[1],
          telephone: props.rowData[2],
          address: props.rowData[3],
          email: props.rowData[4]
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
            {["name", "telephone",  "address" , "email"].map(function(item, i){
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

export default HQBranchModal;
