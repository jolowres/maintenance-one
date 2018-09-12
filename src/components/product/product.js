import React, { Component } from 'react'

class Product extends Component {

  render () {
    if (this.props.product) {
      return (
        <div>             
          <h2>Product details</h2>
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="name">Product name</label>
                <input className="form-control" 
                  id="name" value={this.props.product.name} 
                  onChange={this.props.onChange}/>
              </div>
              <div className="col">
                <label htmlFor="productCode">Product code</label>
                <input className="form-control" 
                  id="productCode" 
                  value={this.props.product.productCode}
                  onChange={this.props.onChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="submit" 
                  className="btn btn-primary"
                  onClick={this.props.onSave}/>
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