import React from 'react';
import {
  makeStyles
} from "@material-ui/core/styles";

import './SmallButton.css';
import { Button} from "@material-ui/core";

const useStyles = makeStyles({
  buttonType: {
    border: inputs => `1px solid ${inputs.inverseColor}`,
    color: inputs => inputs.inverseColor,
    backgroundColor: inputs => inputs.mainColor,
    display: "flex",
    marginLeft: "auto",

    width: inputs => inputs.width,
    padding: "1%",

    marginRight: "auto",
    marginTop: "1rem",  
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: inputs => inputs.inverseColor,
      color: inputs => inputs.mainColor,
    }
  }
});

function findInverse(color) {
  if (color === "black") {
    return "white";
  } else {
    return "black";
  }
}

const SmallButton = props => {
  const inputs = { 
    width: props.width,
    mainColor: props.color, 
    inverseColor: findInverse(props.color) 
  }
  const classes = useStyles(inputs);
  return (
    <Button 
      className={classes.buttonType} 
      disabled={props.isSubmitting} 
      type={props.type}
    > 
      {props.children}
    </Button>
  );
};

export default SmallButton;

