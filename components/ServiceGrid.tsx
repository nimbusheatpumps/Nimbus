import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BoilerQuoteForm from './BoilerQuoteForm';

interface Service {
  title: string;
  price: string;
  image: string;
}

const services: Service[] = [
  { title: 'Worcester Bosch 1000', price: 'From £799', image: '/images/worcester-bosch/Worcester_Bosch_1000_Which_24_584x550.jpg' },
  { title: 'Worcester Bosch 2000', price: 'From £899', image: '/images/worcester-bosch/Worcester_2000_Right.jpg' },
  { title: 'Worcester Bosch 4000', price: 'From £999', image: '/images/worcester-bosch/4000_Left_Facing.jpg' },
  { title: 'Worcester Bosch 8000', price: 'From £1199', image: '/images/worcester-bosch/Worcester_Bosch_8000_Front_1.jpg' },
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
  const [isOpen, setIsOpen] = useState(false);
  const [fallbacks, setFallback] = useState(services.map(s => s.image));
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const displayServices = propServices || services;

  return (
    <>
      <motion.section
        className="p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            Boiler Services - Scunthorpe Experts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {displayServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <div className="bg-white rounded-xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] transition-all p-6">
                  {failedImages.has(index) ? (
                    <div className="h-48 w-full bg-gray-300 rounded-t-xl mb-4 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">{service.title}</span>
                    </div>
                  ) : (
                    <Image
                      src={fallbacks[index]}
                      onError={() => setFailedImages(prev => new Set(prev).add(index))}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      width={800}
                      height={600}
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={`${service.title} Series`}
                      className="w-full object-cover rounded-t-xl mb-4 hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  )}
                  <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2 leading-1.5">{service.title}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-4 leading-1.5">{service.price}</p>
                  <button
                    onClick={() => { console.log("Quote button clicked"); setIsOpen(true); }}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg w-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {isOpen && <BoilerQuoteForm onClose={() => setIsOpen(false)} />}
    </>
  );
}
