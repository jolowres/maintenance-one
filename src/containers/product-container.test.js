import React from 'react'
import ProductContainer from './product-container'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

describe('product-container', () => {
  let wrapper, store, initialState, instance

  beforeEach(() => {
    initialState = {
      product: {
        product: {
          product: 
          {
            name: 'test'
          }
        }
      }
    }
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    wrapper = shallow(<ProductContainer store={store}/>)
    instance = wrapper.dive().instance()
  })

  describe('saveProduct', () => {
    it('should call updateProduct action when save product is called', () => {
      jest.spyOn(instance.props.actions, 'updateProduct')
      instance.saveProduct({
        preventDefault: jest.fn()
      })
      expect(instance.props.actions.updateProduct).toHaveBeenCalled()
    })
  })

  describe('updateProductState', () => {
    it('should update product', () => {
      jest.spyOn(instance, 'setState')
      instance.updateProductState({
        target: {
          id: 'name',
          value: 'new-value'
        }
      })
      expect(instance.setState).toHaveBeenCalledWith({"product": {"name": "new-value"}})
    })
  })

  describe('componentDidMount', () => {
    it('should call fetchProduct', () => {
      jest.spyOn(instance.props.actions, 'fetchProduct')
      instance.componentDidMount()
      expect(instance.props.actions.fetchProduct).toHaveBeenCalled()
    })
  })

  describe('componentWillReceiveProps', () => {
    it('should call setState', () => {
      jest.spyOn(instance, 'setState')
      instance.componentWillReceiveProps({product: 'test'})
      expect(instance.setState).toHaveBeenCalledWith({product: 'test'})
    })
  })
})