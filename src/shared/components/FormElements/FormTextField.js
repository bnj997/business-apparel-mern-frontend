import React from 'react';
import {useField } from 'formik';
import { TextField} from "@material-ui/core";

import './FormTextField.css';

const FormTextField = ({placeholder, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField className="field"
      error={!!errorText} 
      variant={props.variant}
      label={placeholder}
      type={props.type}
      multiline = {props.isMultiline}
      rows = {props.isMultiline && 5}
      style= {{width: `${props.width}`, marginTop: `${props.spacing}`, backgroundColor: `${props.color}`  }}
      {...field} 
      helperText = {errorText} 
    />
  );
};

export default FormTextField;

