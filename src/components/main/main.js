import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import ProductContainer from '../../containers/product-container'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={  Home }/>
      <Route path='/product' component={ ProductContainer }/>      
    </Switch>
  </main>
)

export default Main