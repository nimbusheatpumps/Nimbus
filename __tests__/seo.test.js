import { generateSEO, authorBio } from '../lib/seo';

describe('SEO utilities', () => {
  test('generateSEO returns correct structure', () => {
    const seo = generateSEO('Test Title', 'Test Description', 'test-slug');
    expect(seo.title).toBe('Test Title');
    expect(seo.canonical).toBe('https://nimbusheatpumps.co.uk/test-slug');
    expect(seo.openGraph?.title).toBe('Test Title');
  });

  test('authorBio contains required fields', () => {
    expect(authorBio.name).toBe('Brian Smith');
    expect(authorBio.credentials).toBe('Gas Safe registered engineer (966812)');
    expect(authorBio.experience).toBe('15+ years in North Lincolnshire heating systems');
  });
});