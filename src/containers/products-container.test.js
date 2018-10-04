import React from 'react'
import ProductsContainer from './products-container'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

describe('ProductsContainer', () => {
  let wrapper, store, initialState, instance

  beforeEach(() => {
    initialState = {
      products: {
        products: []
      }
    }
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    wrapper = shallow(<ProductsContainer store={store}/>)
    instance = wrapper.dive().instance()
  })

  describe('componentDidMount', () => {
    it('should call fetchProducts', () => {
      jest.spyOn(instance.props.actions, 'fetchProducts')
      instance.componentDidMount()
      expect(instance.props.actions.fetchProducts).toHaveBeenCalled()
    })
  })

  describe('componentWillReceiveProps', () => {
    it('should call setState', () => {
      jest.spyOn(instance, 'setState')
      instance.componentWillReceiveProps({products: 'test'})
      expect(instance.setState).toHaveBeenCalledWith({products: 'test'})
    })
  })
})