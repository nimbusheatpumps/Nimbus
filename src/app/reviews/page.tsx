"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { getLiveGoogleReviews, LiveReview } from "../../lib/live-google-reviews";
import Image from 'next/image';

export const metadata = {
  title: "Customer Reviews | Worcester Bosch Boilers Scunthorpe North Lincolnshire",
  description: "Read customer reviews for Nimbus Heat Pumps' Worcester Bosch boiler installations in Scunthorpe and North Lincolnshire."
};

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
        <p className="text-lg text-gray-600 mb-8 leading-1.5">Unable to load reviews at this time.</p>
        <a
          href="https://g.page/r/yk7F28G9VpVstANKx/review"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Leave us a Google Review
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-12 text-center leading-1.5">Our Google Reviews</h1>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] p-6 transition-all hover:scale-105 duration-300 ease-in-out"
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
                  <p className="text-lg italic text-gray-800 mb-4 leading-1.5">"{review.text}"</p>
                  <p className="text-sm text-gray-500 leading-1.5">{review.relativeTimeDescription}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-8 leading-1.5">We're building our 5-star reputation — be the first to leave a Google review!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://g.page/r/yk7F28G9VpVstANKx/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Leave us a Google Review
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}