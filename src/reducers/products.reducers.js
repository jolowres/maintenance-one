

import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from '../actions/products.actions'

function products (
  state = {
    isFetching: false,
    products: []
  }, action
) {
  switch (action.type) {
    case REQUEST_PRODUCTS: 
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products
      });
    default: 
      return state;
  }
}

export default products