import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home'
import Product from '../product/product'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path='/product' component={Product}/>      
    </Switch>
  </main>
)

export default Main