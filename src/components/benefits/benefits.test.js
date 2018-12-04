import React from 'react';
import { render } from 'react-testing-library';
import Benefits from './benefits';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

describe('benefits', () => {
  it('should render correctly', () => {
    const benefits = [
      {name: 'test1'},
      {name: 'test2'}
    ]
    const mockOnSelectBenefit = function () {}
    const { getByTestId } = render(<Benefits 
      benefits={benefits}
      onSelectBenefit = {mockOnSelectBenefit}
    />);
    expect(getByTestId('benefits')).toBeInTheDocument();
  })

  it('should render loading when benefits is null', () => {
    const benefits = null
    const mockOnSelectBenefit = function () {}
    const { getByTestId } = render(<Benefits 
      benefits={benefits}
      onSelectBenefit = {mockOnSelectBenefit}
    />);
    expect(getByTestId('loading')).toBeInTheDocument();
  })
})