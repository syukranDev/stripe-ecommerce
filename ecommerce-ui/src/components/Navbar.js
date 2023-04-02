import React, { useState, useContext} from 'react'
import { Button, Container, Navbar, Modal, NavbarBrand, Nav, ModalBody } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { CartContext } from '../context/CartContext'
import { CheckoutCartProduct } from './CheckoutCartProduct'


export const NavbarComponent = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
    const cart = useContext(CartContext)

    const totalCartCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({items: cart.items})
        }).then(response => {
            return response.json()
        }).then(response => {
            if(response.url) {
                window.location.assign(response.url)
            }
        })
    }
  return (
    <>
        <Navbar expand='sm'>
            <NavbarBrand href='/'>Ecommerce Store</NavbarBrand>
            <NavbarToggle/>
            <Navbar.Collapse className='justify-content-end'>
                <Button onClick={handleShow}>Cart {totalCartCount} Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Your shopping cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    totalCartCount > 0 ?
                    (<>
                        <p>Items in your cart:</p>
                        {cart.items.map( (item, idx) => (
                           <CheckoutCartProduct key={idx} id={item.id} quantity={item.quantity}></CheckoutCartProduct>
                        ))}

                        <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                        <Button size="sm" variant="success" onClick={checkout}>Checkout</Button>
                    </>)
                    :
                    (<>
                        <p>Nothing in your cart, please continue shoppig :)</p>
                    </>)
                }
            </Modal.Body>
        </Modal>
    </>
  )   
}
