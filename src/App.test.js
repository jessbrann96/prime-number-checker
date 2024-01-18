import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it('should render header text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Prime Number Checker/i);
  expect(linkElement).toBeInTheDocument();
});

it('should renders sub text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter a number to check if it is prime/i);
  expect(linkElement).toBeInTheDocument();
});

it('should correctly say that a number is prime', async () => {
  render(<App />);
  await userEvent.type(screen.getByTestId('prime-number-input'), '5');
  await userEvent.click(screen.getByTestId('prime-number-button'));
  expect(screen.getByTestId('prime-number-text')).toHaveTextContent("5 is a prime number");
});

it('should correctly say that a number is not prime', async () => {
  render(<App />);
  await userEvent.type(screen.getByTestId('prime-number-input'), '6');
  await userEvent.click(screen.getByTestId('prime-number-button'));
  expect(screen.getByTestId('prime-number-text')).toHaveTextContent("6 is not a prime number");
});

it('should correctly say that the input is not a number', async () => {
  render(<App />);
  await userEvent.type(screen.getByTestId('prime-number-input'), 'afh');
  await userEvent.click(screen.getByTestId('prime-number-button'));
  expect(screen.getByTestId('prime-number-text')).toHaveTextContent("afh is not a number");
});

it('should correctly say to input a value if the field is empty', async () => {
  render(<App />);
  await userEvent.type(screen.getByTestId('prime-number-input'), '');
  await userEvent.click(screen.getByTestId('prime-number-button'));
  expect(screen.getByTestId('prime-number-text')).toHaveTextContent("Please input a number and select 'check'");
});