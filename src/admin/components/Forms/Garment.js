import React,{ useState} from 'react';

import { Formik, Form, Field, FieldArray} from 'formik';
import { garments } from '../Tables/garmentsData';
import { Button } from "@material-ui/core";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import FormRadio from '../../../shared/components/FormElements/FormRadio';
import FormCheckbox from '../../../shared/components/FormElements/FormCheckbox';
import Modal from '../../../shared/components/UIElements/Modal';


const validationSchema = yup.object({
  garmentImg: yup
    .string()
    .email()
    .required(),
  name: yup
    .string()
    .required()
    .max(15),
  styleNum: yup
    .string()
    .required(),
  price: yup
    .number()
    .required()
    .max(7),
  category: yup
    .string()
    .required(),
  supplier: yup
    .string()
    .required(),
  description: yup
    .string()
    .required(),
  colours: yup.array().of (
    yup.string().required()
  ),
  sizes: yup
    .string()
    .required(),
});

const Input = ({ field}) => {
  return (
    <>
      <FormTextField {...field} />
    </>
  );
};

const Garment = props => {


  return (

      <Formik 
        initialValues={{
          garmentImg: "",
          name: "",
          styleNum: "",
          price: 0.00,
          category: "",
          supplier: [],
          description: "",
          colours: [""],
          sizes: ["N/A"]

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
        <Form style={{display: "flex", flexWrap: "wrap"}}>
          <div style={{flex: "1 1 500px", margin: "1%" }}>
            <FormTextField 
              placeholder="Image:" 
              name="image" 
              type="input"
            />
            <FormTextField 
              placeholder="Name:" 
              name="name" 
              type="input"
            />
            <FormTextField
              placeholder="Style Number" 
              name="styleNum" 
              type="input" 
            />
            <FormTextField
              placeholder="Price" 
              name="price" 
              type="input" 
            />
            <FormTextField
              placeholder="Category" 
              name="category" 
              type="input" 
            />
            <FormTextField
              placeholder="Description"
              name="description" 
              type="input" 
              variant={props.type}
              isMultiline={true}
            />
        
          </div>
          <div style={{flex: "1 1 500px", margin: "1%" }}>
            <FormLabel component="legend">Supplier</FormLabel>
              <RadioGroup row aria-label="gender" name="gender1"  style={{paddingBottom: "3%"}}>
                <FormRadio
                  name="supplier" 
                  value="Biz Collection"
                  type="radio" 
                  label="Biz Collection"
                  variant={props.type}
                />
                <FormRadio
                  name="supplier" 
                  value="JB Wears"
                  type="radio"
                  label="JB Wears" 
                  variant={props.type}
                />
                <FormRadio
                  name="supplier" 
                  value="Winning Spirit"
                  type="radio" 
                  label="Winning Spirit" 
                  variant={props.type}
                />
              </RadioGroup >
            <FormLabel component="legend">Sizes</FormLabel>
            <FormGroup row>
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                value="N/A"
                label="N/A" 
                variant={props.type} 
              />
            <FormCheckbox
                name="sizes" 
                type="checkbox"
                value="2XS"
                label="2XS" 
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                value="XS"
                label="XS" 
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="S" 
                value="S"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="M" 
                value="M"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="L" 
                value="L"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="XL" 
                value="XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="2XL" 
                value="2XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="3XL" 
                value="3XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="4XL" 
                value="4XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="5XL" 
                value="5XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="6XL" 
                value="6XL"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="7XL" 
                value="7XL"
                variant={props.type} 
              />
            </FormGroup>

            <FormGroup row style={{paddingTop: "4%"}}>
            <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="8"
                value="8" 
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="10" 
                value="10"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="12" 
                value="12"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="14" 
                value="14"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="16" 
                value="16"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="18" 
                value="18"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="20" 
                value="20"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="22" 
                value="22"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="24" 
                value="24"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="26" 
                value="26"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="28" 
                value="28"
                variant={props.type} 
              />
              <FormCheckbox
                name="sizes" 
                type="checkbox"
                label="30" 
                value="30"
                variant={props.type} 
              />
            </FormGroup>

            <FormLabel component="legend">Colours</FormLabel>
            <FieldArray name="colours">
              {({ push, remove }) => (
                <div>
                  {values.colours.map((c, index) => {
                    return (
                      <div key={c.id}>
                        <Field
                          name={`colours[${index}]`}
                          component={Input}
                        />
                        <Button onClick={() => remove(index)}>Delete</Button>
                      </div>
                    );
                  })}
                  <Button
                    type="button"
                    onClick={() =>
                      push("")
                    }
                  >
                    add to list
                  </Button>
                </div>
              )}
            </FieldArray>
          
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </div>

        </Form>
      )}
    </Formik>

  )
}

export default Garment;

