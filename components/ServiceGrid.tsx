import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  price: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  { title: '1000', price: '£1,790', description: '25kW combi, small homes', image: '/images/worcester-bosch/WB_1000.jpg', alt: 'Worcester Bosch Greenstar 1000 boiler by Bryan Whiteley' },
  { title: '2000', price: '£2,100', description: '25/30kW combi, 1-2 baths', image: '/images/worcester-bosch/Worcs_Condens_2000_Front.jpg', alt: 'Worcester Bosch Greenstar 2000 boiler by Bryan Whiteley' },
  { title: '4000', price: '£2,400', description: '25/30/35kW combi, 2-3 baths', image: '/images/worcester-bosch/4000_Front_Facing.jpg', alt: 'Worcester Bosch Greenstar 4000 boiler by Bryan Whiteley' },
  { title: '8000', price: '£3,000+', description: '25/30/35kW combi with Smart Controls, 3+ baths', image: '/images/worcester-bosch/8000_Style_Black.jpg', alt: 'Worcester Bosch Greenstar 8000 boiler by Bryan Whiteley' },
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
  const [imageSrcs, setImageSrcs] = useState(services.map(s => s.image));
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <div className="shadow-lg hover:shadow-xl rounded-xl border-teal-200 p-6 transition-all">
                <Image
                  src={imageSrcs[index]}
                  onError={() => setImageSrcs(prev => prev.map((src, i) => i === index ? `https://source.unsplash.com/featured/?worcester%20bosch%20${service.title}%20boiler&q=90&sizes=100vw` : src))}
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  width={800}
                  height={600}
                  quality={90}
                  alt={service.alt}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{service.price}</p>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded w-full">Quote</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
