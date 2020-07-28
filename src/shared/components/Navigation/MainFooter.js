import React from 'react';
import { Formik, Form} from 'formik';
import * as yup from 'yup';

import FooterCard from '../UIElements/FooterCard';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import NavLinks from './NavLinks';
import SmallButton from '../FormElements/SmallButton'
import FormTextField from '../FormElements/FormTextField';
import './MainFooter.css';


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



const MainFooter = () => {
  return (
    <div className="footer">
      <FooterCard >
        <h2> Business Apparel </h2>
        <p> Business Apparel is a focussed whole of the client service business for the SMB and / or corporate sector who want quality in business apparel and exceptional service. We help in the design, production and delivery of any business apparel a client may require.</p>
      </FooterCard>

      <FooterCard >
        <h2> Useful Links </h2>
        <NavLinks mode="footerMode"/>
      </FooterCard>

      <FooterCard >
        <h2>Get in Touch </h2>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <MailIcon />
          <p style={{marginLeft: "1rem"}}> info@businessapparel.com </p>
        </div>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <PhoneIcon />
          <p style={{marginLeft: "1rem"}}> +61400 000 000 </p>
        </div>
      </FooterCard>
      
      <FooterCard >
        <h2> Enquire Now </h2>

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
              />
              <FormTextField
                placeholder="Email:" 
                name="email" 
                type="input" 
              />
               <FormTextField
                placeholder="Your Organisation" 
                name="organisation" 
                type="input" 
              />
              <FormTextField
                placeholder="Your Message:" 
                name="message" 
                type="input" 
                isMultiline={true}
              />
              <div>
                <SmallButton disabled={isSubmitting} type="submit">Submit</SmallButton>
              </div>
            </Form>
          )}
        </Formik>

      </FooterCard>
    </div >
  );
};

export default MainFooter;
