import React from 'react';
import {useField } from 'formik';
import { Radio, FormControlLabel} from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';

import './FormTextField.css';

const FormRadio = ({placeholder, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <React.Fragment>
      <FormControlLabel  
        error={!!errorText} 
        {...field} 
        control={<Radio />} 
        label={props.label} 
      />
      <FormHelperText style={{color: "red"}}>{errorText}</FormHelperText>
    </React.Fragment>
    
  );
};

export default FormRadio;
