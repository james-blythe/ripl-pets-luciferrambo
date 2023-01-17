import { render, screen } from '@testing-library/react';
import CustomizedGrid from './index';

const petsData = [
  {
    Breed: 'Pitbull',
    DOB: '2020-03-01',
    Owner: 'John Doe',
    PetsName: 'Max',
    Picture: 'www.picture.com',
    Species: 'Dog',
    Summary: 'Max is a happy pitbull',
    featured: false,
  },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
  useNavigate: jest.fn(),
}));

describe('CustomizedGrid Component', () => {
  it('should render a list of pets data', () => {
    render(<CustomizedGrid pets={petsData} />);
    expect(screen.getByText('Pitbull')).toBeInTheDocument();
    expect(screen.getByText('2020-03-01')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('Dog')).toBeInTheDocument();
  });
});
