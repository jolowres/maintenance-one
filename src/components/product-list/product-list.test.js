import React from 'react'
import ProductList from './product-list'
import { shallow } from 'enzyme'

describe('product-list', () => {
  let wrapper, products

  products = []

  it('should render product list when products passed in', () => {
    wrapper = shallow(<ProductList products={products}/>)
    expect(wrapper.html('productList')).toEqual(expect.stringContaining('Code'))
  })

  it('should render loading when no products', () => {
    wrapper = shallow(<ProductList products={null}/>)
    expect(wrapper.html('productList')).toEqual(expect.stringContaining('Loading...'))
  })
})