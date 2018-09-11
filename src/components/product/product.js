import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/procuct.actions'

class Product extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, product } = this.props
    dispatch(fetchProduct(product))
  }

  render() {
    const { product } = this.props
    return (
      <div className="product">
        <p>This is the product page</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state
  return {
    product
  }
}

export default connect(mapStateToProps)(Product)