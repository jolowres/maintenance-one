import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import ProductContainer from '../../containers/product-container'
import ProductsContainer from '../../containers/products-container'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={  Home }/>
      <Route path='/product/:id' component={ ProductContainer }/>
      <Route path='/products' component={ ProductsContainer }/>      
    </Switch>
  </main>
)

export default Main