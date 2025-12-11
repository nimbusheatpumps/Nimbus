import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      className="bg-teal-50 border border-teal-500 py-4 px-4 shadow-lg"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">5.0</span>
          <div className="flex ml-1">
            ★★★★★
          </div>
        </div>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">7 Google Reviews</span>
        <img
          src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
          alt="Gas Safe Logo"
          className="h-8 w-auto"
        />
      </div>
    </motion.div>
  );
};

export default TrustBar;