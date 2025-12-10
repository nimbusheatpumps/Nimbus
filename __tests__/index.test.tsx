import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

// Mock next/head
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Home Page', () => {
  it('renders the hero section', () => {
    render(<Home />);
    expect(screen.getByText('Nimbus Heat Pumps')).toBeInTheDocument();
  });

  it('renders the quote teaser section', () => {
    render(<Home />);
    expect(screen.getByText('Get Your Instant Boiler Quote')).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    render(<Home />);
    expect(screen.getByText('Fixed Boiler Now?')).toBeInTheDocument();
  });

  // Basic performance metric stub - in real Lighthouse, this would be automated
  it('has basic performance considerations', () => {
    // Stub for Lighthouse performance metrics
    // In actual implementation, use tools like lighthouse-ci or puppeteer
    const startTime = performance.now();
    render(<Home />);
    const renderTime = performance.now() - startTime;

    // Assert render time is reasonable (stub threshold)
    expect(renderTime).toBeLessThan(100); // ms
  });
});