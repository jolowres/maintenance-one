import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './product-list.css'

class ProductList extends Component {
  render () {
    if (this.props.products) {
      const productListItems = this.props.products.map((product) => 
        <div className="row data-row" key={product.productCode}>
          <div className="col-2">{product.productCode}</div>
          <div className="col-9">{product.name}</div>
          <div className="col-1">
            {/* <button className="btn btn-sm  btn-primary"
              onClick={() => this.props.getProduct(product.productCode)}>
                Edit {product.productCode}
            </button> */}
            <Link to={'/product/' + product.productCode} className="btn btn-sm  btn-primary">
              Edit {product.productCode}
            </Link>
          </div>
        </div>
      )
      return (
        <div className="productList">
          <div className="row header">
            <div className="col-2">Code</div>
            <div className="col-9">Name   </div>
            <div className="col-1">Action   </div>
          </div>
          <div>{productListItems}</div>
        </div>
      )
    } else {
      return (
        <div className="loading">Loading...</div>
      )
    }
  }
}

export default ProductList