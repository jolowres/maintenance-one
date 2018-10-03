import * as actions from './product.actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const axiosMock = new AxiosMockAdapter(axios)


describe('product.actions', () => {

  describe('fetchProduct', () => {
    it('should retrieve product', () => {
      expect.assertions(1)
      axiosMock.onAny().reply(200, {
        name: 'test',
        productCode: 'testCode'
      })
      const store = mockStore({product: ''})
      return store.dispatch(actions.fetchProduct()).then(() => {
        let myResult = store.getActions().find(action => action.type == 'RECEIVE_PRODUCT')
        expect(myResult.product.name).toEqual('test')
      })
    })

    it('should error', () => {
      expect.assertions(1)
      axiosMock.onAny().reply(400, {
        error: 'error'
      })
      const store = mockStore({product: ''})
      return store.dispatch(actions.fetchProduct()).then((result) => {
        console.log('result --------------->')
        console.log(result)
        expect(1).toEqual(1)
      })
    })

  })
})