"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLiveGoogleReviews, type LiveGoogleReviews, type LiveReview } from '../src/lib/live-google-reviews';

export default function FloatingTrustBubble() {
  const [reviews, setReviews] = useState<LiveReview[]>([]);
  const [currentReview, setCurrentReview] = useState<LiveReview | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews();
        setReviews(data.reviews);
        if (data.reviews.length > 0) {
          setCurrentReview(data.reviews[0]); // Show the first review, or randomize
        }
      } catch (err) {
        setError('Failed to load reviews');
      }
    };
    fetchReviews();
  }, []);

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm"
        >
          See all our Google reviews
        </a>
      </div>
    );
  }

  if (!currentReview) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50 animate-bounce">
      <div className="flex items-center mb-2">
        <img src={currentReview.authorPhotoUri} alt={currentReview.authorName} className="w-8 h-8 rounded-full mr-2" />
        <div>
          <p className="font-semibold text-sm">{currentReview.authorName}</p>
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-yellow-400 ${i < currentReview.rating ? 'fill-current' : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm">{currentReview.text}</p>
      <p className="text-xs text-gray-500 mt-1">{currentReview.relativeTimeDescription}</p>
      <Link href="/reviews" className="text-blue-500 text-xs mt-2 block">View all reviews</Link>
    </div>
  );
}