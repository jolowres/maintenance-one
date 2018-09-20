import React, { Component } from 'react'

class ProductList extends Component {
  render () {
    if (this.props.products) {
      const productListItems = this.props.products.map((product) => 
        <div key={product.productCode}>
          <span>{product.productCode}</span>
          <span>{product.name}</span>
        </div>
      )
      return (
        <div>
          <div>{productListItems}</div>
        </div>
      )
    } else {
      return (
        <div>Loading...       </div>
      )
    }
  }
}

export default ProductList