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
      multiline = {props.isMultiline}
      rows = {props.isMultiline && 5}
      {...field} 
      helperText = {errorText} 
    />
  );
};

export default FormTextField;

