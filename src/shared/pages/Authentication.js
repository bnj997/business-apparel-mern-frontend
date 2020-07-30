import React from 'react';

import TextSection from '../components/UIElements/TextSection';
import LoginCard from '../../shared/components/UIElements/LoginCard';

import { Formik, Form} from 'formik';
import * as yup from 'yup';
import FormTextField from '../components/FormElements/FormTextField';
import SmallButton from '../components/FormElements/SmallButton';

const validationSchema = yup.object({
  username: yup
    .string()
    .required()
    .max(15),
  password: yup
    .string()
    .required()
    .min(8)
});



const Authentication = () => {
  return (
    <React.Fragment>
      <TextSection type="center normal" color="#404040" >
        <LoginCard>
          <h1 style={{marginTop: "5%"}}> Log in </h1>
          <h3> Access your dashboard here</h3>
          <Formik 
            initialValues={{
              username: "",
              password: "",
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
                  placeholder="Username:" 
                  name="username" 
                  variant="outlined"
                  width="80%"
                  spacing="2rem"
                  color="#F5F5F5"
                />
                <FormTextField
                  placeholder="Password:" 
                  name="password" 
                  type="password" 
                  variant="outlined"
                  width="80%"
                  spacing="2rem"
                  color="#F5F5F5"
                />
                <div style={{marginTop: "3rem", marginBottom: "2rem"}}>
                  <SmallButton disabled={isSubmitting} type="submit" color="black" width="80%">Log in</SmallButton>
                  <SmallButton disabled={isSubmitting} type="submit" color="black" width="80%">Forgot password</SmallButton>
                </div>
              </Form>
            )}
          </Formik>
        </LoginCard>
      </TextSection>
    </React.Fragment>
  );
};

export default Authentication;