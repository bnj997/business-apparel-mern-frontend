import React, { useState} from 'react';

import { Formik, Form, FieldArray} from 'formik';
import { Card, Button, MenuItem } from '@material-ui/core';
import {
  withStyles
} from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
      <Formik 
        initialValues={{
          image: props.image,
          id: props.id,
          name: props.name, 
          category: props.category, 
          styleNum: props.styleNum, 
          price: props.price, 
          size: props.sizes[0], 
          colour: props.colours[0],
          quantity: 1,
          subtotal: 1,
        }}
        enableReinitialize = {true}
        onSubmit={(data, {setSubmitting}) =>  {
          setSubmitting(true)
          data.subtotal = data.price * data.quantity;
          props.onAdd(data)
          setSubmitting(false)
        }}
      > 
        {({values, isSubmitting, handleChange}) => (
        <Form >
          <CardMedia
            component="img"
            style={{height: "350px", width: "100%", objectFit: "contain"}}
            src={`http://localhost:5000/${props.image}`}
          />
          <CardContent className="garmentInfo">
            <h2 style={{marginTop: "0"}}>{props.name}</h2>
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

            <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
              <FormControl variant="outlined">
                <h3 style={{margin: "2px 0 0.5rem 0"}}>Sizes:</h3>
                <Select
                  name="size"
                  value={values.size}
                  onChange={handleChange}
                  style={{width: "6rem"}}
                >
                  {props.sizes.map(size => (
                    <MenuItem value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <h3 style={{margin: "2px 0 0.5rem "}}>Colours:</h3>
                <Select
                  name="colour"
                  value={values.colour}
                  onChange={handleChange}
                  style={{width: "8rem"}}
                >
                  {props.colours.map(colour => (
                    <MenuItem value={colour}>{colour}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
              <FormControl variant="outlined">
                <h3 style={{margin: "2px 0 0.5rem "}}>Quantity:</h3>
                <OutlinedInput
                  type="number"
                  name="quantity"
                  inputProps= {{
                    min: "1"
                  }}
                  value={values.quantity}
                  onChange={handleChange}
                  style={{width: "6rem"}}
                />
              </FormControl>
              <Button
                style={{backgroundColor: "black", color: 'white', height: "3.5rem", marginTop: "auto"}}
                variant="contained"
                color="default"
                startIcon={<ShoppingCartIcon />}
                disabled={isSubmitting} 
                type="submit"
              >
                Add to cart
              </Button>
            </div>
           
          </CardContent>        
        </Form>
        )}
      </Formik>
    </MyCard>  
  );
};

export default ItemCard;

