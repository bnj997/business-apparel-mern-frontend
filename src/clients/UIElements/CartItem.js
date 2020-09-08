import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const CartItem = props => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", margin: "1.2rem"}}>
      <img style={{height: "75px", width: "75px"}} src={`http://localhost:5000/${props.image}`} />
      <div style={{marginLeft: "1.2rem"}}>
        <h3 style={{margin: 0, paddingBottom: "1rem"}}>{props.name}</h3>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          <div>
            <p style={{margin: 0, padding: 0}}>Price: ${props.price}</p>
            <p style={{margin: 0, padding: 0}}>Quantity: {props.quantity}</p>
          </div>
          <div style={{marginLeft: "1rem"}}>
            <p style={{margin: 0, padding: 0}}>Size: {props.size}</p>
            <p style={{margin: 0, padding: 0}}>Colour: {props.colour}</p>
          </div>
        </div>
      </div>
      <CloseIcon onClick={() => props.onRemove(props)} fontSize="small" style={{ cursor: 'pointer', display: "block", marginLeft: "auto",  marginBottom: "auto", color: "grey"}}/>
    </div>
  );
};

export default CartItem;

