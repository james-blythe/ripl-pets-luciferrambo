import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomizedCard from './index';

describe('CustomizedCard', () => {
  let petData;

  beforeEach(() => {
    petData = {
      PetsName: 'DOGGY',
      Picture: 'dog.jpg',
      DOB: '2021-02-01',
      Age: '2',
      Color: 'brown',
      Gender: 'Male',
      Owner: 'John',
      Summary: 'This is a cute dog',
    };
  });

  it('should render pet name as a tag', () => {
    render(<CustomizedCard src={petData} />);
    const petNameTag = screen.getByText(petData.PetsName);
    expect(petNameTag).toBeInTheDocument();
    expect(petNameTag).toHaveStyle('font-size: 20px');
  });

  it('should render pet age, color, gender and owner as tags', () => {
    render(<CustomizedCard src={petData} />);
    const ageTag = screen.getByText(petData.Age);
    const colorTag = screen.getByText(petData.Color);
    const genderTag = screen.getByText(petData.Gender);
    expect(ageTag).toBeInTheDocument();
    expect(colorTag).toBeInTheDocument();
    expect(genderTag).toBeInTheDocument();
  });

  it('should render pet DOB', () => {
    render(<CustomizedCard src={petData} />);
    const dobDiv = screen.getByText(petData.DOB);
    expect(dobDiv).toBeInTheDocument();
  });

  it('should render pet summary', () => {
    render(<CustomizedCard src={petData} />);
    const summaryDiv = screen.getByText(petData.Summary);
    expect(summaryDiv).toBeInTheDocument();
  });
});
