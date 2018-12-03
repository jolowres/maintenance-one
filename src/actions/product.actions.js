import axios from 'axios'

export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const SET_SELECTED_BENEFIT = 'SET_SELECTED_BENEFIT'

function requestProduct(product) {
  return {
    type: REQUEST_PRODUCT,
    product
  }
}

function receiveProduct(json) {
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

export function setSelectedBenefit(benefit) {
  return {
    type: SET_SELECTED_BENEFIT,
    benefit
  }
}

export function fetchProduct(productCode) {
  return dispatch => {
    dispatch(requestProduct(productCode))
    return axios.get(`http://localhost:4000/product-not-cached/${productCode}`)
      .then((response) => {
        dispatch(receiveProduct(response.data))
      })
  }
}


export function updateProduct(product) {
  return dispatch => {
    return axios.post('http://localhost:4000/product', { product: product })
      .then((response) => {
        dispatch(updateProductSuccess(product, response.data))
      })
  }
}

