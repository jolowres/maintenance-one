import React from 'react'
import ProductList from './product-list'
import { Link, MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'

describe('product-list', () => {
  let wrapper, products

  it('should render product list when products passed in', () => {
    products = []
    wrapper = shallow(<ProductList products={products}/>)
    expect(wrapper.html('productList')).toEqual(expect.stringContaining('Code'))
  })

  it('should render products when products passed in', () => {
    products = [{
      productCode: 'test-code',
      name: 'test-name'
    }]
    wrapper = shallow(<MemoryRouter><ProductList products={products}/></MemoryRouter>)
    expect(wrapper.html('productList')).toEqual(expect.stringContaining('test-code'))
  })

  it('should render loading when no products', () => {
    wrapper = shallow(<ProductList products={null}/>)
    expect(wrapper.html('productList')).toEqual(expect.stringContaining('Loading...'))
  })
})