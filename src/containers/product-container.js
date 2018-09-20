import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../actions/product.actions'
import Product from '../components/product/product'

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.updateProductState = this.updateProductState.bind(this)
    this.saveProduct = this.saveProduct.bind(this)

    this.state = {
      product: this.props.product.product
    };
  }

  componentDidMount() {     
    this.props.actions.fetchProduct()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({product: nextProps.product});
  }

  updateProductState(event) {
    const field = event.target.id;
    const product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  saveProduct(event) {
    event.preventDefault();
    this.props.actions.updateProduct(this.state.product)
  }

  render() {
    return (      
      <Product 
        product={this.state.product}
        onChange={this.updateProductState}
        onSave={this.saveProduct}>
      </Product>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)