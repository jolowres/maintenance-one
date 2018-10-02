import React from 'react'
import ProductContainer from './product-container'
import { configure, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

// TODO move to test setup
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

const mockStore = configureMockStore()

describe('product-container', () => {
  let wrapper, store, initialState

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
    store.state = 
    wrapper = shallow(<ProductContainer store={store}/>)
  })

  it('should do stuff', () => {
    expect(1).toEqual(1)
  })
})