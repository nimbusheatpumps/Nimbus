import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoilerQuoteForm from '../components/BoilerQuoteForm';

describe('BoilerQuoteForm', () => {
  it('renders the form with the first step (Home Type)', () => {
    render(<BoilerQuoteForm />);
    expect(screen.getByText('Boiler Quote Form')).toBeInTheDocument();
    expect(screen.getByText('Home Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Detached')).toBeInTheDocument();
    expect(screen.getByLabelText('Semi-Detached')).toBeInTheDocument();
    expect(screen.getByLabelText('Terraced')).toBeInTheDocument();
    expect(screen.getByLabelText('Flat')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('navigates between steps using next and prev buttons', () => {
    render(<BoilerQuoteForm />);

    // Step 0: Home Type
    expect(screen.getByText('Home Type')).toBeInTheDocument();

    // Go to Step 1: Postcode
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByLabelText('Postcode')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();

    // Fill postcode to go to Step 2: Needs
    fireEvent.change(screen.getByLabelText('Postcode'), { target: { value: 'DN15 8AA' } });
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Needs')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();

    // Go back to Step 1
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByLabelText('Postcode')).toBeInTheDocument();

    // Go back to Step 0
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByText('Home Type')).toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('validates postcode - accepts DN15', () => {
    render(<BoilerQuoteForm />);
    fireEvent.click(screen.getByText('Next')); // To postcode step

    const postcodeInput = screen.getByLabelText('Postcode');
    fireEvent.change(postcodeInput, { target: { value: 'DN15 8AA' } });
    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Needs')).toBeInTheDocument();
    expect(screen.queryByText('Postcode must start with DN15')).not.toBeInTheDocument();
  });

  it('validates postcode - rejects others', () => {
    render(<BoilerQuoteForm />);
    fireEvent.click(screen.getByText('Next')); // To postcode step

    const postcodeInput = screen.getByLabelText('Postcode');
    fireEvent.change(postcodeInput, { target: { value: 'SW1A 1AA' } });
    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Postcode must start with DN15')).toBeInTheDocument();
    expect(screen.getByLabelText('Postcode')).toBeInTheDocument(); // Still on step 1
  });

  it('validates postcode - edge case: empty postcode', () => {
    render(<BoilerQuoteForm />);
    fireEvent.click(screen.getByText('Next')); // To postcode step

    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Postcode must start with DN15')).toBeInTheDocument();
  });

  it('validates postcode - edge case: case sensitivity', () => {
    render(<BoilerQuoteForm />);
    fireEvent.click(screen.getByText('Next')); // To postcode step

    const postcodeInput = screen.getByLabelText('Postcode');
    fireEvent.change(postcodeInput, { target: { value: 'dn15 8aa' } });
    fireEvent.click(screen.getByText('Next'));

    expect(screen.getByText('Postcode must start with DN15')).toBeInTheDocument();
  });

  it('shows modal with correct quote on submit', () => {
    render(<BoilerQuoteForm />);

    // Fill minimal form
    fireEvent.click(screen.getByLabelText('Detached'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.change(screen.getByLabelText('Postcode'), { target: { value: 'DN15 8AA' } });
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByLabelText('New Boiler'));
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Fixed Quote £2,200 – Book Next Day')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('handles upsell checkbox functionality', () => {
    render(<BoilerQuoteForm />);

    // Navigate to step 2
    fireEvent.click(screen.getByText('Next'));
    fireEvent.change(screen.getByLabelText('Postcode'), { target: { value: 'DN15 8AA' } });
    fireEvent.click(screen.getByText('Next'));

    const checkbox = screen.getByLabelText('Interested in Heat Pump grant?');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('has proper ARIA accessibility attributes', () => {
    render(<BoilerQuoteForm />);

    // Step 0: Home Type fieldset
    expect(screen.getByRole('group', { name: 'Home Type' })).toBeInTheDocument();

    // Navigate to Step 1: Postcode
    fireEvent.click(screen.getByText('Next'));
    const postcodeInput = screen.getByLabelText('Postcode');
    expect(postcodeInput).toHaveAttribute('aria-invalid', 'false');
    expect(postcodeInput).toHaveAttribute('aria-describedby', 'postcode-error');

    // Trigger error
    fireEvent.change(postcodeInput, { target: { value: 'invalid' } });
    fireEvent.click(screen.getByText('Next'));
    expect(postcodeInput).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveAttribute('id', 'postcode-error');

    // Navigate to Step 2: Needs fieldset
    fireEvent.change(postcodeInput, { target: { value: 'DN15 8AA' } });
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByRole('group', { name: 'Needs' })).toBeInTheDocument();

    // Modal ARIA
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
  });

  it('expands and collapses FAQ accordion', () => {
    render(<BoilerQuoteForm />);

    const button = screen.getByText('Boiler install cost Scunthorpe 2025?');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'faq-answer');

    // Expand
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Our fixed quote for boiler installation in Scunthorpe is £2,200, with next day booking available.')).toHaveAttribute('id', 'faq-answer');

    // Collapse
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('Our fixed quote for boiler installation in Scunthorpe is £2,200, with next day booking available.')).not.toBeInTheDocument();
  });
});