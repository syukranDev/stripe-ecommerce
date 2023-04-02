import React, { useContext } from 'react'
import { Pagination, Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'


export const ProductCard = (props) => {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)


    console.log(cart.items)

    return (
            <Card>
                <Card.Img  variant='top' src={product.path}></Card.Img>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                
                    { productQuantity > 0 ? 
                      (
                      <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button bg='secondary' size="sm " sm="6" className='mx-1' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                                <Button bg='secondary' size="sm" sm="6" className='mx-1' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                        </Form>
                        <hr></hr>
                        <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
                      </>
                      )
                      
                      :
                      (<Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>)
                      
                    }
                </Card.Body>
            </Card>
    )
}
