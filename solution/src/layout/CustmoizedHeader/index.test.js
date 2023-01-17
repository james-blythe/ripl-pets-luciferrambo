import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizedHeader from './index';

describe('CustomizedHeader', () => {
  it('should render a container div', () => {
    render(<CustomizedHeader />);
    expect(
      screen.getByTestId('customized-header-container')
    ).toBeInTheDocument();
  });

  it('should render a logo', () => {
    render(<CustomizedHeader />);
    expect(screen.getByTestId('ripl-logo')).toBeInTheDocument();
  });
});
