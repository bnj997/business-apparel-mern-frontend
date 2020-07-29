import React from 'react';
import {
  makeStyles
} from "@material-ui/core/styles";

import './SmallButton.css';
import { Button} from "@material-ui/core";

const useStyles = makeStyles({
  buttonType: {
    border: inputs => `1px solid ${inputs.mainColor}`,
    color: inputs => inputs.mainColor,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",  
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: inputs => inputs.mainColor,
      color: inputs => inputs.inverseColor,
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
  const inputs = { mainColor: props.color, inverseColor: findInverse(props.color) }
  const classes = useStyles(inputs);
  return (
    <Button 
      className={classes.buttonType} 
      disabled={props.isSubmitting} 
      type="submit"
    > 
      {props.children}
    </Button>
  );
};

export default SmallButton;

