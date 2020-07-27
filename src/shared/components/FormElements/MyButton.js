import React from 'react';
import {
  withStyles
} from "@material-ui/core/styles";

import './MyButton.css';
import { Button} from "@material-ui/core";

const InverseOutLineButton = withStyles({
  root: {
    border: "1px solid white",
    borderRadius: "0px",
    color: "white",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",  
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  }
})(Button);


const MyButton = props => {
  return (
    <InverseOutLineButton variant={`${props.outlined}`} disabled={props.isSubmitting} type="submit"> 
      {props.children}
    </InverseOutLineButton>
  );
};

export default MyButton;

