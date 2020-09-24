import React, { useState } from 'react';

import { Formik, Form} from 'formik';
import * as yup from 'yup';
import FormTextField from './FormTextField';
import SmallButton from './SmallButton';
import { Button} from "@material-ui/core";
import './EnquiryForm.css';

import { useHttpClient } from '../../../shared/components/hooks/http-hook';
import ErrorModal from '../UIElements/ErrorModal';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import Modal from '../UIElements/Modal';

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
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function exitModal() {
    setShowConfirmModal(false)
  }


   
  const sendEmail = async (data) => {
    try {
      const response = await sendRequest(
        `http://localhost:5000/api/orders/enquiry`,
        'POST',
        JSON.stringify({
          name: data.name,
          email: data.email,
          organisation: data.organisation,
          message: data.message,
        }),
        { 
          'Content-Type': 'application/json',
        }
      );
      setShowConfirmModal(response)
    } catch (err) {}
  }


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
        sendEmail(data)
        setSubmitting(false)
        resetForm();
      }}
    >
      {({values, errors, isSubmitting}) => (
        <div>
          <Modal 
            show={showConfirmModal}
            onCancel={exitModal}
            header="Enquiry Sent" 
            footerClass="logout__modal-actions" 
            footer={
              <React.Fragment>
                <Button variant="contained" onClick={exitModal} > Cancel </Button>
              </React.Fragment>
            }
          >
            <p>Your enquiry has successfully been sent to Business Apparel!</p>
          </Modal>

          <ErrorModal header="Email Status" error={error} onClear={clearError} />
          {isLoading && <LoadingSpinner />}
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
              <SmallButton disabled={isSubmitting} type="submit" color={props.button} width="10rem" >Send form</SmallButton>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default EnquiryForm;