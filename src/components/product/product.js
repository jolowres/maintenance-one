import React from 'react'

const Product = (props) => {
  return (
    <div>
      <h2>Product details</h2>
      <div>{props.product.name}</div>
      <div>{props.product.productCode}</div>
    </div>
  )
}

export default Product