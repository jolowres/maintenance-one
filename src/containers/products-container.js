import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productsActions from '../actions/products.actions'
import ProductList from '../components/product-list/product-list'

class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      products: this.props.products.products
    }

    // this.getProduct = this.getProduct.bind(this)
  }

  componentDidMount () {
    this.props.actions.fetchProducts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products});
  }

  getProduct(productCode) {
    console.log('function call --->>')
    console.log(productCode)
  }

  render () {
    return (
      <ProductList products={this.state.products} getProduct={this.getProduct}></ProductList>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)


