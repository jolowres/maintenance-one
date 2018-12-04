import {
  REQUEST_PRODUCT,
  RECEIVE_PRODUCT,
  SET_SELECTED_BENEFIT
} from '../actions/product.actions'

function product (
  state = {
    isFetching: false,
    product: {},
    selectedBenefit: {}
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
    case SET_SELECTED_BENEFIT:
      return Object.assign({}, state, {
        selectedBenefit: action.benefit
      })
    default:
      return state;
  }
}

export default product