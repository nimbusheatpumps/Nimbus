import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders navigation with correct ARIA attributes', () => {
    render(<Navbar />);

    // Check main navigation aria-label
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');

    // Check home link aria-label
    const homeLink = screen.getByLabelText('Nimbus Heat Pumps home');
    expect(homeLink).toBeInTheDocument();

    // Check menu button aria-label
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();

    // Check navigation links aria-labels
    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    expect(screen.getByLabelText('Boilers menu')).toBeInTheDocument();
    expect(screen.getByLabelText('Locations')).toBeInTheDocument();
    expect(screen.getByLabelText('Heat Pumps')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact')).toBeInTheDocument();

    // Check submenu links
    expect(screen.getByLabelText('Boiler Install')).toBeInTheDocument();
    expect(screen.getByLabelText('Boiler Repair')).toBeInTheDocument();
  });
});