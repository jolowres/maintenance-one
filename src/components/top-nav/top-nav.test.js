import React from 'react'
import TopNav from './top-nav'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

describe('top-nav', () => {
  it('should render the top nav', () => {
    let wrapper = shallow(<Router><TopNav/></Router>)
    expect(wrapper.html('navbar')).toEqual(expect.stringContaining('Maintenance one'))
  })
})