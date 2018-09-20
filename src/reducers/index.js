import { combineReducers } from 'redux'

import products from './products.reducers'
import product from './product.reducers'

const rootReducer = combineReducers({
  product,
  products
})

export default rootReducer