import App from './App';
import { render, screen } from '@testing-library/react';

test('renders basic text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter a number to check if it is prime/i);
  expect(linkElement).toBeInTheDocument();
});
