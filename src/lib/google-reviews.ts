import fs from 'fs';
import path from 'path';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

interface GoogleReviewsData {
  reviews: Review[];
  aggregateRating: AggregateRating;
}

const filePath = path.join(process.cwd(), 'public', 'google-reviews.json');
const data: GoogleReviewsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const reviews = data.reviews.sort((a, b) => b.time - a.time);
const aggregateRating = data.aggregateRating;

export { reviews, aggregateRating };