import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders footer with correct ARIA attributes', () => {
    render(<Footer />);

    // Check footer role and aria-label
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveAttribute('aria-label', 'Site footer');

    // Check headings have ids
    const servicesHeading = screen.getByRole('heading', { name: /services/i });
    expect(servicesHeading).toHaveAttribute('id', 'services-heading');

    const locationsHeading = screen.getByRole('heading', { name: /locations/i });
    expect(locationsHeading).toHaveAttribute('id', 'locations-heading');

    const contactHeading = screen.getByRole('heading', { name: /contact/i });
    expect(contactHeading).toHaveAttribute('id', 'contact-heading');

    const socialHeading = screen.getByRole('heading', { name: /social/i });
    expect(socialHeading).toHaveAttribute('id', 'social-heading');

    // Check lists have aria-labelledby
    const servicesList = screen.getByLabelText('Services');
    expect(servicesList).toBeInTheDocument();

    const locationsList = screen.getByLabelText('Locations');
    expect(locationsList).toBeInTheDocument();

    const contactAddress = screen.getByLabelText('Contact');
    expect(contactAddress).toBeInTheDocument();

    const socialList = screen.getByLabelText('Social');
    expect(socialList).toBeInTheDocument();

    // Check links have aria-label
    expect(screen.getByLabelText('Boiler services')).toBeInTheDocument();
    expect(screen.getByLabelText('Heat pump services')).toBeInTheDocument();
    expect(screen.getByLabelText('Maintenance services')).toBeInTheDocument();
    expect(screen.getByLabelText('Scunthorpe location')).toBeInTheDocument();
    expect(screen.getByLabelText('Lincoln location')).toBeInTheDocument();
    expect(screen.getByLabelText('Hull location')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook page')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter page')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn page')).toBeInTheDocument();
  });
});