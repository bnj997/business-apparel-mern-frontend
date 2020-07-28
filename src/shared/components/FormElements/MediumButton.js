import React from 'react';
import {
  withStyles, withTheme
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
      color: "white",
      backgroundColor: "black"
    }
  }
})(Button);


const  MediumButton = props => {
  return (
    <OutLineButton disabled={props.isSubmitting} type="submit"> 
      {props.children}
    </OutLineButton>
  );
};

export default MediumButton;
