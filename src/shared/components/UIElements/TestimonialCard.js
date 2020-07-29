import React from 'react';

import { Card } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './TestimonialCard.css';


const TestimonialCard = props => {
  // const TestCard = withStyles({
  //   root: {
  //     fontSize: "1.3rem",
  //     width: "20rem",
  //   }
  // })(Card);

  return (
    <Card className="testimonial-card centered">
      <CardMedia
        style={{height: "150px",  backgroundSize: "contain"}}
        image={props.imageURL}
      />
      <CardContent style={{height: "17rem", overflowY: "auto"}}>
        <h3>{props.organisation}</h3>
        <p>{props.comment}</p>
        <p style={{fontWeight: "bold"}}>{props.writer}</p>
      </CardContent>
   </Card>  
  );
};

export default TestimonialCard;
