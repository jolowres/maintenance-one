import reducer from './products.reducers'
import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from '../actions/products.actions'

describe('products.reducers', () => {
  it('should return state if no action type', () => {
    var result = reducer({
      test: 'test'
    }, '')
    expect(result.test).toEqual('test')
  })

  it('should return default state if no state passed in', () => {
    var result = reducer(undefined, '')
    expect(result.isFetching).toEqual(false)
  })

  it('should return modified state for RECEIVE_PRODUCTS', () => {
    var result = reducer({
      isFetching: false,
      product: []
    }, { 
      type: RECEIVE_PRODUCTS,
      products: [{
        name: 'test'
      }]
    })
    expect(result.products[0].name).toBe('test')
  })

  it('should return modified state for REQUEST_PRODUCTS', () => {
    var result = reducer({
      isFetching: false
    }, { 
      type: REQUEST_PRODUCTS,
      isFetching: false
    })
    expect(result.isFetching).toBe(true)
  })
})
