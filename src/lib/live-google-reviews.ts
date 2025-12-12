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

  try {
    const url = `https://places.googleapis.com/v1/places/yk7F28G9VpVstANKx?key=${apiKey}&fields=reviews,rating,userRatingsTotal`;

    const res = await fetch(url, {
      headers: {
        'X-Goog-FieldMask': 'reviews,rating,userRatingsTotal'
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

    const { rating, userRatingsTotal, reviews } = data;

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
      totalReviews: userRatingsTotal,
      reviews: recentReviews,
    };
  } catch (error) {
    return {
      rating: 0,
      totalReviews: 0,
      reviews: [],
    };
  }
}