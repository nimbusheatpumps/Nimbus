"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getLiveGoogleReviews } from '../src/lib/live-google-reviews';

const TrustBar: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const [rating, setRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLiveGoogleReviews();
        setRating(data.rating);
        setTotalReviews(data.totalReviews);
      } catch (error) {
        // Keep defaults
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className="bg-teal-50 border border-teal-500 py-4 px-4 shadow-lg hover:shadow-2xl transition-all rounded-xl"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">{rating.toFixed(1)} ★★★★★ · {totalReviews} Google reviews</span>
        </div>
        <Image
          src="/gas-safe-badge.png"
          width={160}
          height={160}
          quality={95}
          priority
          alt="Gas Safe Logo"
          className="h-8 w-auto"
        />
      </div>
    </motion.div>
  );
};

export default TrustBar;