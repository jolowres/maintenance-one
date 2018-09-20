import axios from 'axios'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json,
    receivedAt: Date.now()
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts())
    return axios.get('http://localhost:4000/product')
      .then((response) => {
        dispatch(receiveProducts(response.data))
      })
      .catch((error) => {
        console.log('error getting product', error)
      })
  }
}