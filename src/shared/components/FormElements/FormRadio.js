import React from 'react';
import {useField } from 'formik';
import { Radio, FormControlLabel} from "@material-ui/core";

import './FormTextField.css';

const FormRadio = ({placeholder, ...props}) => {
  const [field] = useField(props);
  return (
    <FormControlLabel {...field} control={<Radio />} label={props.label} />
  );
};

export default FormRadio;
