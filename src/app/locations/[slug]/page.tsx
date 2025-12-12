'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function LocationPage() {
  const params = useParams();
  const town = params.slug!;
  const [fallback, setFallback] = useState('');
  const [imageError, setImageError] = useState(false);

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

  // Town-specific data
  const townData = {
    scunthorpe: {
      name: 'Scunthorpe',
      image: '/images/scunthorpe-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.654321!3d53.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878b1234567890a%3A0x1234567890abcdef!2sScunthorpe!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    },
    lincoln: {
      name: 'Lincoln',
      image: '/images/lincoln-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.543210!3d53.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878a1234567890b%3A0x1234567890abcdef!2sLincoln!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    },
    hull: {
      name: 'Hull',
      image: '/images/hull-bg.jpg', // Placeholder
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.345678!3d53.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879b1234567890c%3A0x1234567890abcdef!2sHull!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk'
    }
  };

  const data = townData[town as keyof typeof townData] || townData.scunthorpe;

  return (
    <>
      <motion.div className="p-4 sm:p-6 relative min-h-screen flex items-center justify-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        {!imageError ? (
          <Image
            src={fallback || "/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png"}
            width={1920}
            height={1080}
            priority={true}
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Worcester Bosch Greenstar Hero boiler by Bryan Whiteley"
            className="absolute inset-0 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
            onError={() => { if (!fallback) setFallback('/images/worcester-bosch/4000_Front_Facing.jpg'); else setImageError(true); }}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-500 flex items-center justify-center">
            <p className="text-white text-xl">Worcester Bosch 4000 Boiler</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-blue-900/80"></div>
        <motion.div
          className="text-center relative z-10 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-5xl md:text-7xl font-bold text-white mb-8 leading-1.5"
          >
            Boiler Services in <span className="text-orange-400">{data.name}</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 mb-8 leading-1.5"
          >
            Professional heating solutions by Bryan Whiteley
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-6 px-12 sm:py-4 sm:px-10 rounded-lg text-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get Quote
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Map Section */}
      <motion.div className="p-4 sm:p-6 bg-gray-50" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-900 leading-1.5">Find Us in {data.name}</h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src={data.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)]"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </>
  );
}