import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../actions/product.actions'
import Product from '../components/product/product'
import Premium from '../components/premium/premium'
import Benefits from '../components/benefits/benefits'

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.updateProductState = this.updateProductState.bind(this)
    this.updatePremiumState = this.updatePremiumState.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.setSelectedBenefit = this.setSelectedBenefit.bind(this)
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

  setSelectedBenefit(benefit, e) {
    return this.props.actions.setSelectedBenefit(benefit)
  }

  render() {
    if(this.state.product) {
      return (
        <div className="productContainer">      
          <Product 
            product={this.state.product}
            onChange={this.updateProductState}
            onSave={this.saveProduct}>
          </Product>
          <Premium 
            premiums={this.state.product.premiums}
            onChange={this.updatePremiumState}>
          </Premium>  
          <Benefits 
            benefits={this.state.product.benefits}
            onSelectBenefit={this.setSelectedBenefit}>
          </Benefits>
          <input type="submit" 
                  className="btn btn-primary"
                  value="Save Product"
                  onClick={this.saveProduct}/>
        </div>         
      )
    } else {
      return (
        <div className="loading">Loading product...</div>
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