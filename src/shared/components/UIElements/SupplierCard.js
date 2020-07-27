import React from 'react';

import { Card } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import Grow from '@material-ui/core/Grow';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './SupplierCard.css';


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
    <Grow 
      in={true} 
      style={{ transformOrigin: '0 0 0' }}
      {...(!props.leader ? { timeout: 1000 } : {})} 
    >
      <MyCard>
        <CardActionArea>
          <CardMedia
            style={{height: "420px",  backgroundSize: "cover"}}
            image={props.image}
          />
          <CardContent className="content" style={{height: "7rem"}}>
            {props.children}
          </CardContent>
        </CardActionArea>
      </MyCard>  
    </Grow>
  );
};

export default SupplierCard;
