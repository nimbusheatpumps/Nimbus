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
      image: 'https://imgbin.com/img/9e6a5e/worcester-bosch-group-boiler-png',
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
      image: 'https://seeklogo.com/images/W/worcester-bosch-group-logo-9E0B8A8A8A-seeklogo.com.png',
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
      image: 'https://www.alamy.com/stock-photo-worcester-bosch-boiler-175987.html',
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
      image: '/images/worcester/greenstar-8000-life.png',
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
      image: '/images/worcester/greenstar-8000-system.png',
      features: [
        'System boiler with high efficiency',
        'Suitable for larger homes',
        'Integrated weather compensation',
        'Low carbon footprint'
      ],
      price: '£1,600'
    }
  ];

  const [src30i, setSrc30i] = useState(models[0].image);
  const [src30si, setSrc30si] = useState(models[1].image);
  const [src4000, setSrc4000] = useState(models[2].image);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={index}
            className="bg-teal-50 shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {model.name === 'Greenstar 30i' ? (
              <Image
                src={src30i}
                onError={() => setSrc30i('https://via.placeholder.com/800x600?text=Worcester+Boiler')}
                loading="lazy"
                width="800"
                height="600"
                alt={`Worcester Bosch Greenstar ${model.name} boiler by Bryan Whiteley`}
                className="w-full h-48 object-cover"
              />
            ) : model.name === 'Greenstar 30si' ? (
              <Image
                src={src30si}
                onError={() => setSrc30si('https://via.placeholder.com/800x600?text=Worcester+Boiler')}
                loading="lazy"
                width="800"
                height="600"
                alt={`Worcester Bosch Greenstar ${model.name} boiler by Bryan Whiteley`}
                className="w-full h-48 object-cover"
              />
            ) : model.name === 'Greenstar 4000' ? (
              <Image
                src={src4000}
                onError={() => setSrc4000('https://via.placeholder.com/800x600?text=Worcester+Boiler')}
                loading="lazy"
                width="800"
                height="600"
                alt={`Worcester Bosch Greenstar ${model.name} boiler by Bryan Whiteley`}
                className="w-full h-48 object-cover"
              />
            ) : (
              <img
                src={model.image}
                alt={model.name}
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
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Get Quote
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingTable;