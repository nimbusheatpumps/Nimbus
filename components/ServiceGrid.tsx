import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  price: string;
  image: string;
}

const services: Service[] = [
  { title: 'Worcester Bosch 1000', price: 'From £799', image: '/images/worcester-bosch/Worcester_Bosch_1000_Which_24_584x550.jpg' },
  { title: 'Worcester Bosch 2000', price: 'From £899', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=worcester%20bosch%20greenstar%202000&w=400&h=300&fit=crop&crop=center&quality=95' },
  { title: 'Worcester Bosch 4000', price: 'From £999', image: '/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png' },
  { title: 'Worcester Bosch 8000', price: 'From £1199', image: '/images/worcester-bosch/Worcester_Bosch_8000__8000_Style_inward_packshot_-_585x550.jpg' },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Boiler Services",
  "description": "Professional boiler installation, replacement, repairs, and servicing by Scunthorpe experts",
  "provider": { "@type": "Organization", "name": "Nimbus Heat Pumps" },
  "areaServed": ["Scunthorpe", "Grimsby"],
  "serviceType": ["New Install", "Replacement", "Repairs", "Servicing", "Heat Pump"],
  "brand": "Worcester Bosch"
};

interface ServiceGridProps {
  services?: Service[];
}

export default function ServiceGrid({ services: propServices }: ServiceGridProps) {
  const [fallbacks, setFallback] = useState(services.map(s => s.image));
  const displayServices = propServices || services;

  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-8 text-primary">
          Boiler Services - Scunthorpe Experts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <div className="bg-white border border-teal-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1">
                <Image
                  src={fallbacks[index]}
                  onError={() => setFallback(prev => prev.map((src, i) => i === index ? `https://source.unsplash.com/random?worcester+bosch+${service.title}+boiler` : src))}
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  width={800}
                  height={600}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={service.title}
                  className="h-32 md:h-40 w-full object-cover rounded-t-xl mb-4"
                />
                <h3 className="text-xl font-bold text-teal-900 mb-2">{service.title}</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">{service.price}</p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all w-full">Quote</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
