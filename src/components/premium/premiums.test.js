import React from 'react';
import { render } from 'react-testing-library';
import Premium from './premium';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

describe('benefits', () => {
  it('should render correctly', () => {
    const premiums = [
      1, 2, 3, 4
    ]
    const mockOnChange = function () {}
    const { getByTestId } = render(<Premium 
      premiums={premiums}
      onChange = {mockOnChange}
    />);
    expect(getByTestId('premiums')).toBeInTheDocument();
  })

  it('should render loading when benefits is null', () => {
    const premiums = null
    const mockOnChange = function () {}
    const { getByTestId } = render(<Premium 
      premiums={premiums}
      onChange = {mockOnChange}
    />);
    expect(getByTestId('loading')).toBeInTheDocument();
  })
})