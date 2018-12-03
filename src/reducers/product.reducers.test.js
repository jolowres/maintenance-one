import reducer from './product.reducers'
import {
  REQUEST_PRODUCT,
  RECEIVE_PRODUCT,
  SET_SELECTED_BENEFIT
} from '../actions/product.actions'

describe('product reducer', () => {
  it('should return state if no action type', () => {
    var result = reducer({
      test: 'test'
    }, '')
    expect(result.test).toEqual('test')
  })

  it('should return modified state for REQUEST_PRODUCT', () => {
    var result = reducer({
      isFetching: false
    }, { type: REQUEST_PRODUCT})
    expect(result.isFetching).toBe(true)
  })

  it('should return modified state for RECEIVE_PRODUCT', () => {
    var result = reducer({
      isFetching: false,
      product: {}
    }, { 
      type: RECEIVE_PRODUCT,
      product: {
        name: 'test'
      }
    })
    expect(result.product.name).toBe('test')
  })

  it('should return modified state for SET_SELECTED_BENEFIT', () => {
    var result = reducer({
      selectedBenefit: {}
    }, { 
      type: SET_SELECTED_BENEFIT,
      benefit: {
        name: 'test'
      }
    })
    expect(result.selectedBenefit.name).toBe('test')
  })

  it('should return default state if no state passed in', () => {
    var result = reducer(undefined, '')
    expect(result.isFetching).toEqual(false)
  })
})