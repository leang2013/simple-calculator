import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

describe('Display', () => {
  describe('Component', () => {
    it('Should contain the 0 ', () => {
      const { getByText } = render(<Display value={null} />);
      const linkElement = getByText('0');
      expect(linkElement).toBeInTheDocument();
    });
    it('Should contain the 20 ', () => {
      const { getByText } = render(<Display value="20" />);
      const linkElement = getByText('20');
      expect(linkElement).toBeInTheDocument();
    });
    it('Should contain the + ', () => {
      const { getByText } = render(<Display operation="+" />);
      const linkElement = getByText('+');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
