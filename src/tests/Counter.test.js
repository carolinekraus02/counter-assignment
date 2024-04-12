// import necessary react testing library helpers here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterDisplay = screen.getByText(/Counter/i);
  expect(counterDisplay).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zeroed = screen.getByTestId('count');
  expect(zeroed.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const showCount = screen.getByTestId('count');
  const clickPlus = screen.getByText('+');
  fireEvent.click(clickPlus);
  expect(showCount.textContent).toBe('1');
  fireEvent.click(clickPlus);
  expect(showCount.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const showCount = screen.getByTestId('count');
  const clickMinus = screen.getByText('-');
  fireEvent.click(clickMinus);
  expect(showCount.textContent).toBe('-1');
  fireEvent.click(clickMinus);
  expect(showCount.textContent).toBe('-2');
});
