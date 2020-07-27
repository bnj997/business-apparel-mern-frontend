import React from 'react';

import { Card } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const MyCard = withStyles({
  root: {
    color: "black",
    fontSize: "1.3rem",
    margin: "1rem",
    width: "20rem"
  }
})(Card);

const SupplierCard = props => {
  return (
    <MyCard>
      <CardActionArea>
        <CardMedia
          style={{height: "300px"}}
          image={props.image}
        />
        <CardContent>
          {props.children}
        </CardContent>
      </CardActionArea>
    </MyCard>  
  );
};

export default SupplierCard;
