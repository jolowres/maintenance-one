import { combineReducers } from 'redux'

import products from './products.reducers'
import product from './product.reducers'
import benefits from './benefit.reducers'

const rootReducer = combineReducers({
  product,
  products,
  benefits
})

export default rootReducer