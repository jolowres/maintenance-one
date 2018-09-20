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
      console.log('----->')
      console.log(this.state.products[0].productCode)
      console.log('<----')
    return (
      <div>Hello</div>
      // <div>{this.state.products[0]}</div>
    )
    } else {
      return null
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


