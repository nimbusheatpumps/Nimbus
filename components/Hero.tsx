import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BoilerQuoteForm from './BoilerQuoteForm';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?worcester,bosch,boiler,kitchen)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/80"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Worcester Bosch Boilers Installed Next Day in North Lincolnshire – From <span className="text-orange-500">£1,790</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          Bryan Whiteley
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 0.8, delay: 0.4, scale: { repeat: Infinity, duration: 2 } }}
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-xl transition-colors"
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