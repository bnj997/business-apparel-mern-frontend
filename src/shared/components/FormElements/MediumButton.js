import React from 'react';
import {
  withStyles
} from "@material-ui/core/styles";

import './MediumButton.css';
import { Button} from "@material-ui/core";

const OutLineButton = withStyles({
  root: {
    border: "1px solid black",
    color: "black",
    fontSize: "1.3rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",  
    "&:hover": {
      backgroundColor: "black",
      color: "white"
    }
  }
})(Button);


const  MediumButton = props => {
  return (
    <OutLineButton variant={`${props.outlined}`} disabled={props.isSubmitting} type="submit"> 
      {props.children}
    </OutLineButton>
  );
};

export default MediumButton;
