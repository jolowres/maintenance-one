import fetch from 'cross-fetch'

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
    product: json.data,
    receivedAt: Date.now()
  }
}

export function fetchProduct(product) {
  return dispatch => {
    dispatch(requestProduct(product))
    return fetch('https://p2p.simplyhealth.co.uk/product/cash-plan')
      .then(response => response.json())
      .then(json => dispatch(receiveProduct(product, json)))
  }
}

