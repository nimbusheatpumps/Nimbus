require('dotenv').config({ path: '.env.local' });

import { getLiveGoogleReviews } from './src/lib/live-google-reviews';

async function test() {
  try {
    const result = await getLiveGoogleReviews();
    console.log('Test passed:');
    console.log('Rating:', result.rating);
    console.log('Total Reviews:', result.totalReviews);
    console.log('Number of reviews:', result.reviews.length);
    if (result.reviews.length > 0) {
      console.log('First review:', result.reviews[0]);
    }
  } catch (error) {
    console.error('Test failed:', error instanceof Error ? error.message : String(error));
  }
}

test();