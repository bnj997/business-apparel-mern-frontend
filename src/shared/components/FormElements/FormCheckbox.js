import React from 'react';
import {useField } from 'formik';
import { Checkbox, FormControlLabel} from "@material-ui/core";

import './FormTextField.css';

const FormCheckbox = ({placeholder, ...props}) => {
  const [field] = useField(props);
  return (
    <FormControlLabel {...field} control={<Checkbox />} label={props.label} />
  );
};

export default FormCheckbox;
