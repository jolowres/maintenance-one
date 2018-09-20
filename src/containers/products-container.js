import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productsActions from '../actions/products.actions'

class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      products: this.props.products.products
    }
  }

  componentDidMount () {
    this.props.actions.fetchProducts()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products});
  }

  render () {
    if (this.state.products) {
     
      const productListItem = this.state.products.map((product) => 
        <div key={product.productCode}>
          <span>
            {product.productCode}
          </span>
          <span>
            {product.name}
          </span>
        </div>
      )

      return (
        <div>{productListItem}</div>
      )
      } else {
        return (
          <div>Loading...</div>
        )
      }
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


