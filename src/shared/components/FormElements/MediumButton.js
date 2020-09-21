import React from 'react';
import {
  withStyles
} from "@material-ui/core/styles";

import './MediumButton.css';
import { Button} from "@material-ui/core";
import { NavLink } from 'react-router-dom';


const OutLineButton = withStyles({
  root: {
    border: "1px solid black",
    textDecoration: "none",
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
      <NavLink to={props.to} exact style={{textDecoration: "none", color: "inherit"}}> {props.children}</NavLink>
    </OutLineButton>
  );
};

export default MediumButton;
