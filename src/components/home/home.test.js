import React from 'react'
import Home from './home'
import { shallow } from 'enzyme'

describe('home', () => {
  it('renders without crashing', () => {
    shallow(<Home/>)
  })
})