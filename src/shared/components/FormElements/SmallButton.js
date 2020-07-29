import React from 'react';
import {
  withStyles
} from "@material-ui/core/styles";

import './SmallButton.css';
import { Button} from "@material-ui/core";

const InverseOutLineButton = withStyles({
  root: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",  
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: "white",
      color: "black"
    }
  }
})(Button);


const SmallButton = props => {
  //setColours(props.color);
  return (
    <InverseOutLineButton style={{color: `${props.color}`, border: `1px solid ${props.color}`}}disabled={props.isSubmitting} type="submit"> 
      {props.children}
    </InverseOutLineButton>
  );
};

export default SmallButton;

