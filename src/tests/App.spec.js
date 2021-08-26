import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../pages/App';

describe('Component', () => {
  it('Should contain the number Calculator! ', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Calculator');
    expect(linkElement).toBeInTheDocument();
  });

  it('Should contain the number 8', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('eight'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('8');
  });
});

describe("Calculation method: 'AC' and '+/-'", () => {
  it('Should contain the number 0', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('eight'));
    fireEvent.click(screen.getByTitle('clear'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('0');
  });
  it('Should contain the number -8', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('eight'));
    fireEvent.click(screen.getByTitle('negative'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('-8');
  });
  it('Should contain the number -0.05', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('dot'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('five'));
    fireEvent.click(screen.getByTitle('negative'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('-0.05');
  });
});

describe("Calculate methods: '%'", () => {
  it('Should contain the number 0.08', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('eight'));
    fireEvent.click(screen.getByTitle('percent'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('0.08');
  });
  it('Should contain the number 50', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('multiple'));
    fireEvent.click(screen.getByTitle('five'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('percent'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('50');
  });
});

describe("Calculate methods: operational '+, -, x, ÷, ='", () => {
  it('Should contain the number 200', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('plus'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('200');
  });
  it('Should contain the number 2.03', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('dot'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('two'));
    fireEvent.click(screen.getByTitle('plus'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('dot'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('2.03');
  });
  it('Should contain the number 100', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('two'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('minus'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('100');
  });
  it('Should contain the number 0.1', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('dot'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('five'));
    fireEvent.click(screen.getByTitle('minus'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('dot'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('five'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('0.1');
  });
  it('Should contain the number 10', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('divide'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('10');
  });
  it('Should contain the number 100', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('multiple'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('zero'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('100');
  });
  it('Should contain the number 0', () => {
    const { getByTitle } = render(<App />);
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('negative'));
    fireEvent.click(screen.getByTitle('plus'));
    fireEvent.click(screen.getByTitle('one'));
    fireEvent.click(screen.getByTitle('equal'));
    const displayContainer = getByTitle('display');
    expect(displayContainer).toHaveTextContent('0');
  });
});
