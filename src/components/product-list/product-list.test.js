import React from 'react'
import ProductList from './product-list'
import { configure, shallow } from 'enzyme'

// TODO move to test setup
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


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