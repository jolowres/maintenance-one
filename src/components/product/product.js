import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/procuct.actions'

class Product extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {     
    const { dispatch, product } = this.props
    dispatch(fetchProduct(product))
  }

  render() {
    return (
      <div className="product">
        <p>This is the product page</p>
        <div>--{this.props.product.productCode}--</div>
        <div>--{this.props.product.name}--</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product.product
  }
}

export default connect(mapStateToProps)(Product)