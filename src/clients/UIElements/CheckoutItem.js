import React from 'react';
import TableCell from '@material-ui/core/TableCell';

import CloseIcon from '@material-ui/icons/Close';


const CheckoutItem = props => {
  return (
    <React.Fragment>
      <TableCell><img style={{height: "75px", width: "75px"}} src={`http://localhost:5000/${props.image}`} /></TableCell>
      <TableCell><p>{props.name}</p></TableCell>
      <TableCell>{props.colour}</TableCell>
      <TableCell>{props.size}</TableCell>
      <TableCell>{props.quantity}</TableCell>
      <TableCell>${props.price}</TableCell>
    </React.Fragment>
  );
};

export default CheckoutItem;
