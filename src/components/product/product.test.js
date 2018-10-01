import React from 'react';
import { render } from 'react-testing-library';
import Product from './product';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

it('renders product details when they are provided', () => {
  const product = {
      productCode: 'HCP'
  };
  const mockOnChange = function () {}
  const mockOnSave = function () {}
  const { getByTestId } = render(<Product 
    product={product}
    onChange = {mockOnChange}
    onSave = {mockOnSave}
  />);
  expect(getByTestId('productDetails')).toBeInTheDocument();
});

it('renders loading when product details are not provided', () => {
  const product = null;
  const mockOnChange = function () {}
  const mockOnSave = function () {}
  const { getByTestId } = render(<Product 
    product={product}
    onChange = {mockOnChange}
    onSave = {mockOnSave}
  />);
  expect(getByTestId('loading')).toBeInTheDocument();
})