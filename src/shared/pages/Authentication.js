import React, { useContext} from 'react';

import MainNavigation from '../components/Navigation/MainNavigation';
import MainFooter from '../components/Navigation/MainFooter';
import SecondaryFooter from '../components/Navigation/SecondaryFooter';

import TextSection from '../components/UIElements/TextSection';
import LoginCard from '../../shared/components/UIElements/LoginCard';

import { Formik, Form} from 'formik';
import { AuthContext } from '../context/auth-context';
import { useHttpClient } from '../components/hooks/http-hook';
import * as yup from 'yup';
import FormTextField from '../components/FormElements/FormTextField';
import SmallButton from '../components/FormElements/SmallButton';
import ErrorModal from '../components/UIElements/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';

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

  const auth = useContext(AuthContext)
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  return (
    <React.Fragment>
      <MainNavigation />
      <TextSection type="center normal" color="#404040" >
        <ErrorModal error={error} onClear={clearError} />
        <LoginCard>
          {isLoading && <LoadingSpinner asOverlay />}
          <h1 style={{marginTop: "5%"}}> Log in </h1>
          <h3> Access your dashboard here</h3>
          <Formik 
            initialValues={{
              username: "",
              password: "",
            }} 
            validationSchema={validationSchema}

            onSubmit={async (data, {setSubmitting, resetForm}) =>  {
              setSubmitting(true)
              resetForm();

              try {
                const responseData = await sendRequest(
                  'http://localhost:5000/api/users/login',
                  'POST',
                  JSON.stringify({
                    username: data.username,
                    password: data.password
                  }),
                  {
                    'Content-Type': 'application/json'
                  }
                );
                auth.login(responseData.userId, responseData.username, responseData.token);
                setSubmitting(false)
              } catch (err) {setSubmitting(false)}

              
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
      <MainFooter />
      <SecondaryFooter />
    </React.Fragment>
  );
};

export default Authentication;