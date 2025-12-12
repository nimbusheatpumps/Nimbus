"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getLiveGoogleReviews, type LiveGoogleReviews } from '../src/lib/live-google-reviews';

export default function FloatingTrustBubble() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const hoverLift = {
    whileHover: { y: -10 },
  };

  const [rating, setRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews();
        setRating(data.rating);
        setTotalReviews(data.totalReviews);
      } catch (err) {
        setError('Failed to load reviews');
      }
    };
    fetchReviews();
  }, []);

  if (error) {
    return (
      <motion.div
        className="fixed bottom-4 right-4 bg-teal-50 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all border max-w-sm z-50"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        whileHover={{ y: -10 }}
      >
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm"
        >
          See all our Google reviews
        </a>
      </motion.div>
    );
  }

  // Removed fake review code for no reviews case

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-teal-50 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all border max-w-sm z-50 animate-bounce"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center mb-2">
        <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
        <div className="flex ml-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
        <span className="ml-2 text-sm">· {totalReviews} Google reviews</span>
      </div>
      <Link href="/reviews" className="text-blue-500 text-xs mt-2 block">View all reviews</Link>
    </motion.div>
  );
}