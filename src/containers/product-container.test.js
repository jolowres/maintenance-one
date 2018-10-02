import React from 'react'
import ProductContainer from './product-container'
import { configure, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

// TODO move to test setup
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

const mockStore = configureMockStore()

describe('product-container', () => {
  let wrapper, store, initialState, instance

  beforeEach(() => {
    initialState = {
      product: {
        product: {
          name: 'test'
        }
      }
    }
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    wrapper = shallow(<ProductContainer store={store}/>)
    instance = wrapper.dive().instance()
  })

  it('should call updateProduct action when save product is called', () => {
    jest.spyOn(instance.props.actions, 'updateProduct')
    instance.saveProduct({
      preventDefault: jest.fn()
    })
    expect(instance.props.actions.updateProduct).toHaveBeenCalled()
  })
})