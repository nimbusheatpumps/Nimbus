import { getLiveGoogleReviews, type LiveReview } from '../../lib/live-google-reviews';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function ReviewsPage() {
  let data;
  try {
    data = await getLiveGoogleReviews();
  } catch (error) {
    // Fallback: show button instead of reviews
    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
          <div className="text-center">
            <a
              href="https://g.page/r/yk7F28G9VpVstANKx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              See all our Google reviews
            </a>
          </div>
        </div>
      </>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nimbus Heat Pumps",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Crossbeck Road",
      "addressLocality": "Scunthorpe",
      "addressRegion": "North Lincolnshire",
      "postalCode": "DN16 3HR",
      "addressCountry": "GB"
    },
    "telephone": "01724 622069",
    "url": "https://nimbusheatpumps.co.uk",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.rating,
      "reviewCount": data.totalReviews
    }
  };

  const reviewSchemas = data.reviews.map((review: LiveReview) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.authorName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "reviewBody": review.text,
    "datePublished": new Date().toISOString().split('T')[0] // Placeholder, as live data doesn't have exact date
  }));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
        <div className="mb-8 text-center">
          <p className="text-lg">Average Rating: {data.rating}/5 from {data.totalReviews} reviews</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((review: LiveReview, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{review.authorName}</CardTitle>
                <div className="flex items-center">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  <span className="ml-2">{review.rating}/5</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{review.text}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {review.relativeTimeDescription}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <a href="https://g.page/r/yk7F28G9VpVstANKx/review" target="_blank" rel="noopener noreferrer">
              Leave a Review
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}