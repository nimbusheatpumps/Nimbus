import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Model {
  name: string;
  image: string;
  features: string[];
  price: string;
}

const PricingTable: React.FC = () => {
  const models: Model[] = [
    {
      name: 'Greenstar 30i',
      image: '/images/worcester-bosch/WB_1000.jpg',
      features: [
        'High efficiency A-rated boiler',
        'Compact wall-mounted design',
        'Built-in frost protection',
        'Easy installation and maintenance'
      ],
      price: '£950'
    },
    {
      name: 'Greenstar 30si',
      image: '/images/worcester-bosch/Worcester_2000_Left.jpg',
      features: [
        'System boiler for unvented cylinders',
        'Energy efficient with low NOx emissions',
        'Modulating gas valve for precise control',
        'Compatible with smart home systems'
      ],
      price: '£1,050'
    },
    {
      name: 'Greenstar 4000',
      image: '/images/worcester-bosch/4000_Front_Facing.jpg',
      features: [
        'Regular boiler for hot water and heating',
        'Reliable performance with long lifespan',
        'Quiet operation',
        'Comprehensive warranty'
      ],
      price: '£1,200'
    },
    {
      name: 'Greenstar 8000 Life',
      image: '/images/worcester-bosch/Worcester_Bosch_8000_Combi_Which_24_584x550.jpg',
      features: [
        'Combi boiler for instant hot water',
        'Advanced controls and diagnostics',
        'High flow rates for multiple taps',
        'Energy-saving features'
      ],
      price: '£1,400'
    },
    {
      name: 'Greenstar 8000 System',
      image: '/images/worcester-bosch/Worcester_Bosch_8000_Style_Which_24_584x550.jpg',
      features: [
        'System boiler with high efficiency',
        'Suitable for larger homes',
        'Integrated weather compensation',
        'Low carbon footprint'
      ],
      price: '£1,600'
    }
  ];

  const [error30i, setError30i] = useState(false);
  const [error30si, setError30si] = useState(false);
  const [error4000, setError4000] = useState(false);
  const [error8000Life, setError8000Life] = useState(false);
  const [error8000System, setError8000System] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Worcester Boiler Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model, index) => {
          const getErrorState = () => {
            if (model.name === 'Greenstar 30i') return error30i;
            if (model.name === 'Greenstar 30si') return error30si;
            if (model.name === 'Greenstar 4000') return error4000;
            if (model.name === 'Greenstar 8000 Life') return error8000Life;
            if (model.name === 'Greenstar 8000 System') return error8000System;
            return false;
          };
          const setErrorState = (error: boolean) => {
            if (model.name === 'Greenstar 30i') setError30i(error);
            if (model.name === 'Greenstar 30si') setError30si(error);
            if (model.name === 'Greenstar 4000') setError4000(error);
            if (model.name === 'Greenstar 8000 Life') setError8000Life(error);
            if (model.name === 'Greenstar 8000 System') setError8000System(error);
          };
          const hasError = getErrorState();
          return (
            <motion.div
              key={index}
              className="bg-teal-50 shadow-lg hover:shadow-2xl transition-all rounded-xl overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {hasError ? (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700">
                  Worcester Bosch {model.name}
                </div>
              ) : (
                <Image
                  src={model.image}
                  onError={() => setErrorState(true)}
                  loading="lazy"
                  width="800"
                  height="600"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`Worcester Bosch ${model.name} boiler`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{model.name}</h3>
                <ul className="mb-4 space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-teal-800 mb-4">{model.price}</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-all">
                  Get Quote
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PricingTable;