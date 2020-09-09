import React, {useState, useEffect} from 'react'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: 13,
    padding: '0 6px',
  },
}))(Badge);

const ShoppingCart = props => {
  const [numGarments, setNumGarments] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem(props.userId))
    setCart(localCart)
  }, [props.change]) 


  useEffect(() => {
    let numGarments = 0;
    if (cart.length === 0) {
      setNumGarments(0);
    } else {
      cart.forEach(function(item) {
        setNumGarments(() => {
          return numGarments += item.quantity;
        })
      })
    }
  }, [cart]) 

  return (
    <StyledBadge badgeContent={numGarments} color="secondary" showZero >
      <ShoppingCartIcon style={{marginRight: "0.5rem"}}  />
    </StyledBadge>
  )


}

export default ShoppingCart;
