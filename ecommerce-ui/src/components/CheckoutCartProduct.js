import React, {useState, useContext}from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { getProductData } from '../fetcher/productItems'

export const CheckoutCartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

  return (
    <>
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p> $ {(quantity * productData.price).toFixed(2) }</p>
        <Button size="sm" variant='danger' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr></hr>
    </>
  )
}
