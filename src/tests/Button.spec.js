import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button', () => {
  describe('Component', () => {
    it('Should contain the button ', () => {
      const fun = jest.fn();
      const { getByText } = render(<Button action={fun} />);
      const linkElement = getByText('0');
      expect(linkElement).toBeInTheDocument();
    });
    it('Should contain the button ', () => {
      const fun = jest.fn();
      const { getByTitle } = render(<Button value="9" title="nine" action={fun} />);
      const linkElement = getByTitle('nine');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
