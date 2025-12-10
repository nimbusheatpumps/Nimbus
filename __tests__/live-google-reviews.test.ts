import { getLiveGoogleReviews } from '../src/lib/live-google-reviews';

describe('getLiveGoogleReviews', () => {
  it('should fetch and return reviews from Google Places API', async () => {
    const result = await getLiveGoogleReviews();

    expect(result).toHaveProperty('rating');
    expect(result).toHaveProperty('totalReviews');
    expect(result).toHaveProperty('reviews');
    expect(Array.isArray(result.reviews)).toBe(true);

    if (result.reviews.length > 0) {
      const review = result.reviews[0];
      expect(review).toHaveProperty('authorName');
      expect(review).toHaveProperty('rating');
      expect(review).toHaveProperty('text');
      expect(review).toHaveProperty('relativeTimeDescription');
      expect(review).toHaveProperty('authorPhotoUri');
    }
  });
});