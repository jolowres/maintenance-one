import React from 'react'
import ProductContainer from './product-container'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

describe('product provided', () => {
  describe('product-container', () => {
    let wrapper, store, match, history, initialState, instance

    beforeEach(() => {
      initialState = {
        product: {
          product: {
            product: 
            {
              name: 'test',
              premiums: [1, 2, 3, 4]
            } 
          }
        }
      }
      store = mockStore(initialState)
      match = {
        params: {
          id: 1
        }
      },
      history = {
        push: jest.fn()
      }

      store.dispatch = jest.fn()
      wrapper = shallow(<ProductContainer store={store} match={match} history={history}/>)
      instance = wrapper.dive().instance()
    })

    describe('saveProduct', () => {
      it('should call updateProduct action when save product is called', () => {
        var myResolvedPromise = Promise.resolve()
        instance.props.actions.updateProduct = jest.fn().mockReturnValue(myResolvedPromise)
        jest.spyOn(instance.props.actions, 'updateProduct')
        instance.saveProduct({
          preventDefault: jest.fn()
        })
        expect(instance.props.actions.updateProduct).toHaveBeenCalled()
      })

      it('should navigate when updateProduct resolves', (done) => {
        expect.assertions(1)
        var myResolvedPromise = Promise.resolve()
        instance.props.actions.updateProduct = jest.fn().mockReturnValue(myResolvedPromise)
        jest.spyOn(instance.props.history, 'push')
        return instance.saveProduct({
          preventDefault: jest.fn()
        }).then(() => {
          expect(instance.props.history.push).toHaveBeenCalled()
          done()
        })
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
        expect(instance.setState).toHaveBeenCalledWith(
          {"product": {"name": "new-value", "premiums": [1, 2, 3, 4]}}
        )
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

    describe('updatePremiumState', () => {
      it('should call set state to update premiums', () => {
        jest.spyOn(instance, 'setState')
        instance.updatePremiumState({
          target: {
            id: 0,
            value: 'new-value'
          }
        })
        expect(instance.setState).toHaveBeenCalledWith(
          {"product": {"name": "test", "premiums": ["new-value", 2, 3, 4]}}
        )
      })
    })

    describe('setSelectedBenefit', () => {
      it('should call setSelectedBenefit ', () => {
        jest.spyOn(instance.props.actions, 'setSelectedBenefit')
        instance.setSelectedBenefit('test')
        expect(instance.props.actions.setSelectedBenefit).toHaveBeenCalledWith('test')
      })
    })
  })

  describe('render loading', () => {
    it('should display the loading text if there is no data', () => {
      let emptyState = {
        product: {
          product: {
            product: null
          }
        }
      }
      let store = mockStore(emptyState)
      let match = {
        params: {
          id: null
        }
      }
      let history = {
        push: jest.fn()
      }

      store.dispatch = jest.fn()
      let wrapper = shallow(<ProductContainer store={store} match={match} history={history}/>)
      let instance = wrapper.dive()
      expect(instance.hasClass('loading')).toEqual(true)
    })
  })
})
