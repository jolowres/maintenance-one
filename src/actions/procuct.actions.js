import axios from 'axios'

export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

function requestProduct(product) {
  return {
    type: REQUEST_PRODUCT,
    product
  }
}

function receiveProduct(product, json) {
  return {
    type: RECEIVE_PRODUCT,
    product: json,
    receivedAt: Date.now()
  }
}

export function fetchProduct(product) {
  return dispatch => {
    dispatch(requestProduct(product))
    return axios.get('https://p2p.simplyhealth.co.uk/product/cash-plan')
      .then((response) => {
        dispatch(receiveProduct(product, response.data))
      })
  }
}

