import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ControlledPagination from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
  useNavigate: jest.fn(),
}));

describe('ControlledPagination', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    const { container } = render(<ControlledPagination />);
    expect(container).toBeTruthy();
  });
});
