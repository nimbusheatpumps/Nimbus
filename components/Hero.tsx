import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BoilerQuoteForm from './BoilerQuoteForm';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const buttonVariants = {
    ...itemVariants,
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src={src}
        fill={true}
        priority={true}
        quality={90}
        alt="Worcester Bosch Greenstar 4000 boiler by Bryan Whiteley"
        onError={() => setSrc('https://source.unsplash.com/featured/?worcester%20bosch%204000%20boiler&q=90&sizes=100vw')}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-blue-900/80"></div>
      <motion.div
        className="text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-poppins text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Worcester Bosch Greenstar 1000, 2000, 4000 & 8000 – 1000 from <span className="text-orange-400">£1,790</span> (2000 <span className="text-orange-400">£2,100+</span> | 4000 <span className="text-orange-400">£2,400+</span> | 8000 <span className="text-orange-400">£3,000+</span>)
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-200 mb-8"
        >
          Bryan Whiteley
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-12 sm:py-4 sm:px-10 rounded-lg text-xl transition-colors"
        >
          Get Quote
        </motion.button>
      </motion.div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 relative shadow-lg" onClick={(e) => e.stopPropagation()}>
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