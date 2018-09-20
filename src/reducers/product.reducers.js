import {
  REQUEST_PRODUCT,
  RECEIVE_PRODUCT
} from '../actions/product.actions'

function product (
  state = {
    isFetching: false,
    product: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_PRODUCT: 
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        isFetching: false,
        product: action.product,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default product