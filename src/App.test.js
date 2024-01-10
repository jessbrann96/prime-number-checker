import App from './App';
import { render, screen } from '@testing-library/react';

test('renders basic text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter number to verify prime number/i);
  expect(linkElement).toBeInTheDocument();
});
