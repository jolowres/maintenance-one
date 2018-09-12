import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/procuct.actions'
import Product from '../components/product/product'

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product.product
    };
  }

  componentDidMount() {     
    const { dispatch, product } = this.props;
    dispatch(fetchProduct(product));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({product: nextProps.product});
  }

  updateProductState(event) {
    const field = event.target.name;
    const product = this.state.product;
    product[field] = event.target.value;
    return this.setState({product: product});
  }

  saveProduct(event) {
    event.preventDefault();
    console.log('saveing --->')
    console.log(this.state.product);
    //TO DO dispatch save
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

export default connect(mapStateToProps)(ProductContainer)