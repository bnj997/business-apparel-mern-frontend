import React from 'react';

import { Card } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './SupplierCard.css';


const MyCard = withStyles({
  root: {
    color: "black",
    fontSize: "1.3rem",
    margin: "1rem",
    width: "20rem",
  }
})(Card);



const SupplierCard = props => {
  return (
    <MyCard>
      <CardActionArea className="focus" href={props.link} target="_blank" >
        <CardMedia
          style={{height: "350px",  backgroundSize: "cover"}}
          image={props.image}
        />
        <CardContent className="supplier_content">
          <h1>{props.heading}</h1>
          <h3>Access Catalgoue Here</h3>
        </CardContent>
      </CardActionArea>
    </MyCard>  
  );
};

export default SupplierCard;
