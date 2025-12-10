import data from '../public/google-reviews.json';

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

const reviews = data.reviews.sort((a, b) => b.time - a.time);
const aggregateRating = data.aggregateRating;

export { reviews, aggregateRating };