import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Panel from '../components/Panel';

describe('Panel', () => {
  describe('Component', () => {
    it('Should contain the AC ', () => {
      const fun = jest.fn();
      const { getByText } = render(<Panel handleValue={fun} />);
      const linkElement = getByText('AC');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
