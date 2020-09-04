import React from 'react';

import { Card, Button } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './ItemCard.css';


const MyCard = withStyles({
  root: {
    color: "black",
    margin: "2rem",
    width: "22rem",
  }
})(Card);



const ItemCard = props => {
  return (
    <MyCard>
      <CardMedia
        component="img"
        style={{height: "350px"}}
        srcSet={`http://localhost:5000/${props.image}`}
      />
      <CardContent className="garmentInfo">
        <h2>{props.name}</h2>
        <div>
          <div style={{display: "flex"}}>
            <h4 style={{fontWeight: "bold", margin: "2px 1px 2px 1px"}}>Category:</h4>
            <p style={{margin: "2px 0 2px auto"}}>{props.category}</p>
          </div>
          <div style={{display: "flex"}}>
            <h4 style={{fontWeight: "bold", margin: "2px 1px 2px 1px"}}>Style Num:</h4>
            <p style={{margin: "2px 0 2px auto"}}>{props.styleNum}</p>
          </div>
          <div style={{display: "flex"}}>
            <h4 style={{fontWeight: "bold", margin: "2px 1px 2px 1px"}}>Price:</h4>
            <p style={{margin: "2px 0 2px auto"}}>${props.price}</p>
          </div>
        </div>

        <div style={{display: "flex", marginTop: "1rem"}}>
          <FormControl variant="outlined">
            <h3 style={{margin: "2px 0 0.5rem 0"}}>Sizes:</h3>
            <Select
              native
              value={props.size}
              inputProps={{
                name: 'sizes',
                id: 'outlined-size-native-simple',
              }}
            >
              {props.sizes.map(size => (
                <option value={size}>{size}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" style={{marginLeft: "auto"}}>
            <h3 style={{margin: "2px 0 0.5rem "}}>Colours:</h3>
            <Select
              style={{width: "8rem"}}
              native
              value={props.colour}
              inputProps={{
                name: 'colours',
                id: 'outlined-colour-native-simple',
              }}
            >
              {props.colours.map(colour => (
                <option value={colour}>{colour}</option>
              ))}
            
            </Select>
          </FormControl>
        </div>
      </CardContent>
      <CardActions>
        <Button
          style={{margin: "0 2.5rem 1rem 2.5rem", backgroundColor: "black", color: 'white', width: "100%"}}
          variant="contained"
          color="default"
          startIcon={<ShoppingCartIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </MyCard>  
  );
};

export default ItemCard;

