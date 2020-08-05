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
import './GarmentModal.css'


const validationSchema = yup.object({
  garmentImg: yup
    .mixed().required("An image is required")
    .test(
      value => value && ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(value.type)
    ),
  name: yup.string().required(),
  styleNum: yup.string().required(),
  price: yup.number().required().min(0),
  category: yup.string().required(),
  supplier: yup.string().required(),
  description: yup.string().required(),
  colours: yup.array().of(yup.string().required()).required(),
  sizes: yup.array().of(yup.string().required()).required()
});


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
    >
      <Formik 
        initialValues={{
          styleNum: props.rowData[0],
          garmentImg: props.rowData[1],
          name: props.rowData[2],
          price: props.rowData[3],
          category: props.rowData[4],
          supplier: props.rowData[5],
          description: props.rowData[6],
          colours: props.rowData[7],
          sizes: props.rowData[8]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) =>  {
          setSubmitting(true)
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
          <Form style={{display: "flex", flexWrap: "wrap"}} >
          
            <div className="form_section">
              <FormLabel component="legend" className="form_label">Garment Image</FormLabel>
              <ImageUpload
                name="garmentImg"
                setFieldValue={setFieldValue}
              />
              {["name", "styleNum", "price", "category"].map(function(item, i){
                return (
                  <FormTextField 
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
                {["Biz Collection", "Winning Spirit", "JB Wears"].map(function(item, i){
                  return (
                    <FormRadio 
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

              <FormLabel component="legend" className="form_label" >Colours</FormLabel>
              <FieldArray name="colours" className="form_group">
                {({ push, remove }) => (
                  <div>
                    {values.colours.map((c, index) => {
                      return (
                        <div style={{display: "flex",  alignItems: "center"}} key={c.id}>
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
                      Add to list
                    </Button>
                  </div>
                )}
              </FieldArray>

            </div>

            <Button disabled={isSubmitting} type="submit" variant="contained" style={{width: "100%", marginTop: "3%", padding: "1rem"}}>Submit</Button>

          </Form>
      )}
    </Formik>
    </Modal>
  )
}

export default GarmentModal;
