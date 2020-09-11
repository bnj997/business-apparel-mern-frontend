import { useEffect } from "react"

import { useState, useEffect } from 'react';

export const useCart = () => {

  const [numGarments, setNumGarments] = useState(0);
  const [cart, setCart] = useState([]);

  const getFromCart = () => {
    let localCart = JSON.parse(localStorage.getItem(props.userId))
    setCart(localCart)
    return cart;
  }

  const getQuantity = () => {
    let _numGarments = 0;
    if (cart.length === 0) {
      setNumGarments(0);
    } else {
      cart.forEach(function(item) {
        setNumGarments(() => {
          return _numGarments += item.quantity;
        })
      })
    }
    return numGarments;
  }

  return {getFromCart, getQuantity}
}