"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { getLiveGoogleReviews, LiveReview } from "../../lib/live-google-reviews";
import Image from 'next/image';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ReviewsPage() {
  const [reviews, setReviews] = React.useState<LiveReview[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [logoError, setLogoError] = React.useState(false);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getLiveGoogleReviews();
        setReviews(data.reviews);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-600 mb-8">Unable to load reviews at this time.</p>
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
        >
          Leave us a Google Review
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-12 text-center">Our Google Reviews</h1>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition"
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.authorPhotoUri}
                      alt={review.authorName}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full mr-3"
                      onError={(e) => {
                        e.currentTarget.src = '/images/worcester-bosch/worcester-bosch-logo.jpg'; // fallback
                      }}
                    />
                    <div>
                      <h4 className="text-teal-900 font-semibold">{review.authorName}</h4>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`text-yellow-400 ${i < review.rating ? 'fill-current' : ''}`}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic text-gray-800 mb-4">"{review.text}"</p>
                  <p className="text-sm text-gray-500">{review.relativeTimeDescription}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-8">We're building our 5-star reputation — be the first to leave a Google review!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://g.page/r/yk7F28G9VpVstANKx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 shadow-md hover:shadow-lg transition-all"
            >
              Leave us a Google Review
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}