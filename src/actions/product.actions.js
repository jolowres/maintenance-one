import axios from 'axios'

export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'

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

function updateProductSuccess(product) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    product
  }
}

export function fetchProduct(product) {
  return dispatch => {
    dispatch(requestProduct(product))
    return axios.get('http://localhost:4000/product')
      .then((response) => {
        dispatch(receiveProduct(product, response.data))
      })
      .catch((error) => {
        // TODO error handling
        console.log('error getting product', error)
      })
  }
}

export function updateProduct(product) {
  return dispatch => {
    return axios.post('http://localhost:4000/product', { product: product })
      .then((response) => {
        dispatch(updateProductSuccess(product, response.data))
      })
      .catch((error) => {
        console.log('error saving product. ', error)
      })
  }
}

