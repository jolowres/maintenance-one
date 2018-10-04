import * as actions from './products.actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const axiosMock = new AxiosMockAdapter(axios)


describe('products.actions', () => {

  describe('fetchProducts', () => {
    it('should retrieve products', () => {
      expect.assertions(1)
      axiosMock.onAny().reply(200, [{
        name: 'test',
        productCode: 'testCode'
      }])
      const store = mockStore({products: []})
      return store.dispatch(actions.fetchProducts()).then(() => {
        let myResult = store.getActions().find(action => action.type == 'RECEIVE_PRODUCTS')
        expect(myResult.products[0].name).toEqual('test')
      })
    })
  })
})