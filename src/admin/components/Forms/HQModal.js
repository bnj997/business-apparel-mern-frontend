import React from 'react';

import { Formik, Form} from 'formik';
import { Button } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import Modal from '../../../shared/components/UIElements/Modal';
import ImageUpload from '../../../shared/components/FormElements/ImageUpload';


const validationSchema = yup.object({
  HQImg: yup
    .mixed().required("An image is required")
    .test(
      value => value && ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(value.type)
    ),
  name: yup.string().required(),
  telephone: yup.number().required(),
  email: yup.string().email().required(),
});


const HQModal = props => {
  return (
    <Modal 
      className="form_modal"
      height="64vh"
      show={props.show}
      onCancel={props.onCancel}
      header={props.isEditing ? "Edit HQ" : "Add New HQ"}
    >
      <Formik 
        initialValues={{
          HQImg: props.rowData[0],
          name: props.rowData[1],
          telephone: props.rowData[2],
          email: props.rowData[3]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) =>  {
          setSubmitting(true)
          console.log("hello")
          //make async call
          if (!props.isEditing) {
            props.onAdd(data)
          } else {
            props.onEdit(data, props.rowData[props.rowData.length - 1])
          }
          setSubmitting(false)
          resetForm();
        }}
      >
        {({values, setFieldValue, isSubmitting}) => (
          <Form >
            <FormLabel component="legend" className="form_label">Image</FormLabel>
            <ImageUpload
              name="HQImg"
              setFieldValue={setFieldValue}
            />
            {["name", "telephone", "email"].map(function(item, i){
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

export default HQModal;
