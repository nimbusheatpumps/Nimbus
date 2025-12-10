import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero component', () => {
  test('renders the H1 with correct text', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('New Gas Boiler Installation Scunthorpe | £1,790 Fixed Price, Next-Day 2025');
  });

  test('renders the subtitle', () => {
    render(<Hero />);
    expect(screen.getByText('Gas Safe in North Lincs – Save £180/year')).toBeInTheDocument();
  });
});