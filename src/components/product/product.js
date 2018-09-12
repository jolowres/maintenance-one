import React, { Component } from 'react'

class Product extends Component {

  render () {
    console.log('----->')
    console.log(this.props)
    console.log('<-----')
    if (this.props.product) {
      return (
        <div>             
          <h2>Product details</h2>
          <form>
            <div className="row">
              <div className="col">
                  <label htmlFor="product-name">Product name</label>
                  <input className="form-control" id="product-name" value={this.props.product.name}/>
              </div>
              <div className="col">
                <label htmlFor="product-code">Product code</label>
                {/* <input className="form-c      ontrol" id="product-code" value={props.product.productCode}/> */}
              </div>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default Product