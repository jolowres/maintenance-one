import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/procuct.actions'
import Product from '../components/product/product'

class ProductContainer extends Component {

  componentDidMount() {     
    const { dispatch, product } = this.props;
    dispatch(fetchProduct(product));
  }

  render() {
    return (
      <Product product={this.props.product}></Product>
    )
  }

}

function mapStateToProps(state) {
  return {
    product: state.product.product
  };
}

export default connect(mapStateToProps)(ProductContainer)