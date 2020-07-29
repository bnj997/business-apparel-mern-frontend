import React from 'react';

import { Formik, Form} from 'formik';
import * as yup from 'yup';
import FormTextField from './FormTextField';
import SmallButton from './SmallButton';
import './EnquiryForm.css';

const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .max(15),
  email: yup
    .string()
    .email()
    .required(),
  organisation: yup
    .string()
    .required()
    .max(15)
});

const EnquiryForm = props => {
  return (
    <Formik 
      initialValues={{
        name: "",
        email: "",
        organisation: "",
        message: ""
      }} 
      validationSchema={validationSchema}
      onSubmit={(data, {setSubmitting, resetForm}) =>  {
        setSubmitting(true)
        //make async call
        console.log("submit: ", data); 
        setSubmitting(false)
        resetForm();
      }}
    >
      {({values, errors, isSubmitting}) => (
        <Form>
          <FormTextField 
            placeholder="Name:" 
            name="name" 
            type="input"
            variant={props.type}
          />
          <FormTextField
            placeholder="Email:" 
            name="email" 
            type="input" 
            variant={props.type}
          />
          <FormTextField
            placeholder="Your Organisation" 
            name="organisation" 
            type="input" 
            variant={props.type}
          />
          <FormTextField
            placeholder="Your Message:" 
            name="message" 
            type="input" 
            variant={props.type}
            isMultiline={true}
          />
          <div>
            <SmallButton disabled={isSubmitting} type="submit" color={props.button}>Send form</SmallButton>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default EnquiryForm;