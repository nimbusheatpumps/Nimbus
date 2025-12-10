export interface LiveReview {
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription: string;
  authorPhotoUri: string;
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

  const url = `https://places.googleapis.com/v1/places/yk7F28G9VpVstANKx?key=${apiKey}&fields=reviews,rating,userRatingCount`;

  const res = await fetch(url, {
    headers: {
      'X-Goog-FieldMask': 'reviews,rating,userRatingCount'
    },
    next: { revalidate: 86400 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const { rating, userRatingCount, reviews } = data;

  if (!reviews) {
    throw new Error('Failed to fetch reviews');
  }

  const recentReviews: LiveReview[] = reviews.map((review: any) => ({
    authorName: review.author_name,
    rating: review.rating,
    text: review.text,
    relativeTimeDescription: review.relative_time_description,
    authorPhotoUri: review.profile_photo_url,
  }));

  console.log(`Fetched ${reviews.length} reviews from Google`);

  return {
    rating,
    totalReviews: userRatingCount,
    reviews: recentReviews,
  };
}