export interface LiveReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface LiveGoogleReviews {
  rating: number;
  totalReviews: number;
  reviews: LiveReview[];
}

export async function getLiveGoogleReviews(): Promise<LiveGoogleReviews> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_PLACES_API_KEY not set');
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=yk7F28G9VpVstANKx&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 86400 } });

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const data = await res.json();

  if (data.status !== 'OK') {
    throw new Error(`API error: ${data.status}`);
  }

  const { rating, user_ratings_total, reviews } = data.result;

  const recentReviews: LiveReview[] = reviews.map((review: any) => ({
    author_name: review.author_name,
    rating: review.rating,
    text: review.text,
    relative_time_description: review.relative_time_description,
    profile_photo_url: review.profile_photo_url,
  }));

  return {
    rating,
    totalReviews: user_ratings_total,
    reviews: recentReviews,
  };
}