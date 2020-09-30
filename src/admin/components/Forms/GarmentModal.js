import React,{ useState} from 'react';

import { Formik, Form, FieldArray} from 'formik';
import { Button } from "@material-ui/core";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

import * as yup from 'yup';
import FormTextField from '../../../shared/components/FormElements/FormTextField';
import FormRadio from '../../../shared/components/FormElements/FormRadio';
import FormCheckbox from '../../../shared/components/FormElements/FormCheckbox';
import Modal from '../../../shared/components/UIElements/Modal';
import ImageUpload from '../../../shared/components/FormElements/ImageUpload';



const validationSchema = yup.object({
  image: yup
    .mixed().required("An image is required"),
  styleNum: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().required().min(0),
  category: yup.string().required(),
  supplier: yup.string().required(),
  description: yup.string().required(),
  colours: yup.array().of(yup.string().required()).required(),
  sizes: yup.array().of(yup.string().required()).required()
});


const GarmentModal = props => {
  const { v4: uuidv4 } = require('uuid');
  var id;
  if (!props.isEditing) {
    id = uuidv4();
  } else {
    id = props.rowData[0];
  }

  const sizes1 = ["N/A", "2XS" , "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL"]
  const sizes2 = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"]
  const sizes3 = ["72R", "77R", "82R", "87R", "92R", "97R", "102R", "107R", "112R", "117R", "122R", "127R", "132R", "137R", "142R"]

  const [sizeType, setType] = useState(sizes1)
  return (
    <Modal 
      className="form_modal"
      show={props.show}
      height="80vh"
      onCancel={props.onCancel}
      header={props.isEditing ? "Edit Garment" : "Add New Garment"}
    >
      <Formik 
        initialValues={{
          _id: id,
          image: props.rowData[1],
          styleNum: props.rowData[2],
          name: props.rowData[3],
          price: props.rowData[4],
          category: props.rowData[5],
          supplier: props.rowData[6],
          description: props.rowData[7],
          colours: props.rowData[8],
          sizes: props.rowData[9]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) =>  {
          setSubmitting(true)

          //make async call
          if (!props.isEditing) {
            props.onAdd(data)
          } else {
            props.onEdit(data, props.rowData[0])
          }


          setSubmitting(false)
          resetForm();
        }}
      >
        {({values, setFieldValue, isSubmitting}) => (
          <Form style={{display: "flex", flexWrap: "wrap"}} >
          
            <div className="form_section">
              <FormLabel component="legend" className="form_label">Garment Image</FormLabel>
              <ImageUpload
                picture={props.rowData[1]}
                name="image"
                setFieldValue={setFieldValue}
              />

              {[ "styleNum", "name", "price", "category"].map(function(item, i){
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

        

              <FormTextField
                placeholder="Description"
                name="description" 
                type="input" 
                variant={props.type}
                isMultiline={true}
              />

             
            </div>
            <div className="form_section">
              <FormLabel className="form_label" component="legend">Supplier</FormLabel>
                <RadioGroup row aria-label="suppliers" className="form_group">
                  {["Biz Collection", "Winning Spirit", "JB Wears"].map(function(item){
                    return (
                      <FormRadio 
                        key={item}
                        name="supplier" 
                        value={item}
                        type="radio" 
                        label={item}
                        variant={props.type}
                      />
                      )
                  })}
                </RadioGroup >
              

              <FormLabel component="legend" className="form_label" >Sizes</FormLabel>
              <div className="form_group">
                <Button variant="contained" onClick={() => setType(sizes1)}> N/A - 7XL</Button>
                <Button variant="contained" onClick={() => setType(sizes2)}> 8 - 30</Button>
                <Button variant="contained" onClick={() => setType(sizes3)}> 72R - 137R</Button>
              </div>
              <FormGroup row>
                {sizeType.map(function(item) {
                  return (
                  <FormCheckbox
                    key={item}
                    name="sizes" 
                    type="checkbox"
                    value={item}
                    label={item} 
                    variant={props.type} 
                  />
                  )
                })}
              </FormGroup>
             

              <FormLabel component="legend" className="form_label" >Colours</FormLabel>
              <FieldArray name="colours" className="form_group">
                {({ push, remove }) => (
                  <div>
                    {values.colours.map((c, index) => {
                      return (
                        <div style={{display: "flex",  alignItems: "center"}} key={index}>
                          <FormTextField  variant="outlined"  name={`colours[${index}]`}/>
                          <Button  style={{marginLeft: "2%"}} variant="contained" onClick={() => remove(index)}>Delete</Button>
                        </div>
                      );
                    })}
                    <Button
                      style={{marginTop: "2rem", marginBottom: "2rem"}}
                      variant="contained"
                      onClick={() =>
                        push("")
                      }
                    >
                      Add Colour
                    </Button>
                  </div>
                )}
              </FieldArray>

             
            </div>
            <Button disabled={isSubmitting} type="submit" variant="contained" style={{width: "100%", marginTop: "3%", padding: "1rem"}}>{props.isEditing ? `Submit changes` : `Add Garment`}</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default GarmentModal;
