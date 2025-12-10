"use client";

import React, { useState, useEffect } from 'react';
import { getLiveGoogleReviews } from '../src/lib/live-google-reviews';

const TrustBar: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews();
        setRating(data.rating);
        setTotalReviews(data.totalReviews);
      } catch (err) {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading reviews...</div>;
  }

  if (error) {
    return (
      <div className="bg-gray-100 py-4 text-center">
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          See all our Google reviews
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-4 text-center">
      <p className="text-lg">
        {totalReviews} verified Google reviews · {rating}/5 ★★★★★
      </p>
      <a href="https://g.page/r/yk7F28G9VpVstANKx/review" className="text-blue-600 hover:underline">
        Leave a review
      </a>
    </div>
  );
};

export default TrustBar;