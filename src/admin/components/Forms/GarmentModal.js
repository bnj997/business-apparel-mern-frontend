import React,{ useState} from 'react';

import { Formik, Form, Field, FieldArray} from 'formik';
import { TextField} from "@material-ui/core";
import { Button } from "@material-ui/core";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { useForm } from '../../../shared/components/hooks/form-hook';

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import FormRadio from '../../../shared/components/FormElements/FormRadio';
import FormCheckbox from '../../../shared/components/FormElements/FormCheckbox';
import Modal from '../../../shared/components/UIElements/Modal';
import ImageUpload from '../../../shared/components/FormElements/ImageUpload';


const validationSchema = yup.object({
  garmentImg: yup
    .mixed()
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
    .required(),
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
  ).required(),
  sizes: yup.array().of (
    yup.string().required()
  ).required()
});

const Input = ({ field}) => {
  return (
    <>
      <TextField style={{marginTop: "2%"}} variant="outlined" {...field} />
    </>
  );
};

const GarmentModal = props => {

  const sizes1 = ["N/A", "2XS" , "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"]
  const sizes2 = ["8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"]
  const sizes3 = ["72R", "77R", "82R", "87R", "92R", "97R", "102R", "107R", "112R", "117R", "122R", "127R", "132R", "137R"]

  const [sizeType, setType] = useState(sizes1)

  return (
     <Modal 
      show={props.show}
      onCancel={props.onCancel}
      header="Add new Entry?" 
      footerClass="place-item__modal-actions" 
      >

      <Formik 
        initialValues={{
          garmentImg: null,
          name: "",
          styleNum: "",
          price: "",
          category: "",
          supplier: "Biz Collection",
          description: "",
          colours: ["Black", "Navy"],
          sizes: ["N/A"]

        }} 
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) =>  {
          setSubmitting(true)
          console.log("submit: ", data); 



          //make async call
          props.onAdd(data)
          setSubmitting(false)
          resetForm();
        }}
      >
        {({values, errors, setFieldValue, isSubmitting}) => (
        <Form >
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <div style={{flex: "1 1 300px", margin: "1%" }}>
              <FormLabel component="legend" style={{marginBottom: "1rem"}}>Garment Image</FormLabel>
              <ImageUpload
                name="garmentImg"
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
            <div style={{flex: "1 1 300px", margin: "1rem 1% 1% 1%" }}>
              <FormLabel component="legend">Supplier</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" style={{paddingBottom: "3%", display: "flex", justifyContent: "space-between"}}>
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

              <FormLabel component="legend" style={{paddingTop: "2rem", paddingBottom: "1rem"}}>Sizes</FormLabel>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <Button variant="contained" onClick={() => setType(sizes1)}> N/A - 7XL</Button>
                  <Button variant="contained" onClick={() => setType(sizes2)}> 8 - 30</Button>
                  <Button variant="contained" onClick={() => setType(sizes3)}> 72R - 137R</Button>
                </div>
                <FormGroup row  style={{paddingTop: "1rem"}}>
                  {sizeType.map(function(item, i) {
                    return (
                    <FormCheckbox
                      name="sizes" 
                      type="checkbox"
                      value={item}
                      label={item} 
                      variant={props.type} 
                    />
                    )
                  })}
                </FormGroup>

              <FormLabel component="legend" style={{paddingTop: "2rem"}}>Colours</FormLabel>
              <FieldArray name="colours">
                {({ push, remove }) => (
                  <div>
                    {values.colours.map((c, index) => {
                      return (
                        <div style={{justifyContent: "left", display: "flex",  alignItems: "center"}} key={c.id}>
                          <Field
                            name={`colours[${index}]`}
                            component={Input}
                          />
                          <Button  style={{marginLeft: "2%"}} variant="contained" onClick={() => remove(index)}>Delete</Button>
                        </div>
                      );
                    })}
                    <Button
                      style={{marginTop: "2%"}}
                      variant="contained"
                      onClick={() =>
                        push("")
                      }
                    >
                      Add to list
                    </Button>
                  </div>
                )}
              </FieldArray>
            
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
            <Button disabled={isSubmitting} type="submit" variant="contained" style={{width: "100%", marginTop: "3%", padding: "1rem"}}>Submit</Button>
          </div>
          
        </Form>
      )}
    </Formik>
    </Modal>
  )
}

export default GarmentModal;

