import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productArray } from '../fetcher/productItems'
import { ProductCard } from '../components/ProductCart'

export const Store = () => {
  return (
    <>
        <h1 align="center" className='p-3'>Welcome to the Store</h1>
        <Row xs={1} md={3} className="g-4">

            {productArray.map((product, idx) => (
                <Col align="center" key={idx}>
                   <ProductCard product={product}/>
                </Col>
            ))}
           
        </Row>

    </>
)
}
