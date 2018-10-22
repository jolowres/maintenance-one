import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../actions/product.actions'
import Product from '../components/product/product'
import Premium from '../components/premium/premium'

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.updateProductState = this.updateProductState.bind(this)
    this.updatePremiumState = this.updatePremiumState.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.state = {
      product: this.props.product.product
    };
  }

  componentDidMount() {
    this.props.actions.fetchProduct(this.props.match.params.id)
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

  updatePremiumState(event) {
    const index = event.target.id;
    const product = this.state.product;
    product.premiums[index] = event.target.value
    this.setState({product: product})
    return product.premiums
  }

  saveProduct(event) {
    event.preventDefault()
    return this.props.actions.updateProduct(this.state.product).then(() => {
      this.props.history.push('/products')
    })
  }

  render() {
    if(this.state.product) {
      return (
        <div>      
          <Product 
            product={this.state.product}
            onChange={this.updateProductState}
            onSave={this.saveProduct}>
          </Product>
          <Premium 
            premiums={this.state.product.premiums}
            onChange={this.updatePremiumState}>
          </Premium>  
          {/* TO DO - move save button to here */}
        </div>         
      )
    } else {
      return (
        <div>Loading product...</div>
      )
    }

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