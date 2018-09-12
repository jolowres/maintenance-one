import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/procuct.actions'
import Product from '../components/product/product'

class ProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product.product
    }
  }

  componentDidMount() {     
    const { dispatch, product } = this.props;
    dispatch(fetchProduct(product));
  }

  componentWillReceiveProps(nextProps) {
    console.log('new props --> updating state')
    console.log(nextProps.product)
    this.setState({product: nextProps.product})
  }

  render() {
    return (
      <Product product={this.state.product}></Product>
    )
  }

}

function mapStateToProps(state) {
  return {
    product: state.product.product
  };
}

export default connect(mapStateToProps)(ProductContainer)