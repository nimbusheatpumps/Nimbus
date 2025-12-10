import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BoilerQuoteForm from './BoilerQuoteForm';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          Nimbus Heat Pumps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Professional boiler services and heat pump installations across Scunthorpe and Grimsby
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mb-8"
        >
          <Image
            src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
            alt="Gas Safe Registered – 966812 heating engineer badge"
            width={120}
            height={120}
            className="mr-4"
          />
          <div className="text-left">
            <p className="text-lg font-semibold text-gray-800">Gas Safe Registered – 966812</p>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Get Quote
        </motion.button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <BoilerQuoteForm isModal={true} />
          </div>
        </div>
      )}
    </section>
  );
}