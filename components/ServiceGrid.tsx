import { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  price: string;
  description: string;
  location: string;
}

const services: Service[] = [
  { title: 'New Install', price: '£1,790 Gas Safe Registered – 966812', description: 'Scunthorpe experts', location: 'Scunthorpe' },
  { title: 'Replacement', price: '£1,500+', description: 'Scunthorpe experts', location: 'Scunthorpe' },
  { title: 'Repairs', price: '£99', description: 'Scunthorpe experts', location: 'Scunthorpe' },
  { title: 'Servicing', price: '£79', description: 'Scunthorpe experts', location: 'Scunthorpe' },
  { title: 'Heat Pump', price: '£4,799 grant', description: 'Scunthorpe experts', location: 'Scunthorpe' },
  { title: 'New Install', price: '£1,790 Gas Safe Registered – 966812', description: 'Scunthorpe experts', location: 'Grimsby' },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Boiler Services",
  "description": "Professional boiler installation, replacement, repairs, and servicing by Scunthorpe experts",
  "provider": { "@type": "Organization", "name": "Nimbus Heat Pumps" },
  "areaServed": ["Scunthorpe", "Grimsby"],
  "serviceType": ["New Install", "Replacement", "Repairs", "Servicing", "Heat Pump"]
};

interface ServiceGridProps {
  services?: Service[];
}

export default function ServiceGrid({ services: propServices }: ServiceGridProps) {
  const [filter, setFilter] = useState('all');
  const displayServices = propServices || services;
  const filteredServices = displayServices.filter(s => filter === 'all' || s.location.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-8 text-primary">
          Boiler Services - Scunthorpe Experts
        </motion.h2>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by location (e.g., Grimsby)"
          className="w-full max-w-md mx-auto block mb-8 p-2 border rounded"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={`${service.title}-${service.location}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow border">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{service.price}</p>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-sm text-gray-500">Location: {service.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Filter test
export const testFilter = () => {
  const filtered = services.filter(s => s.location.toLowerCase().includes('grimsby'));
  return filtered.length === 1 && filtered[0].location === 'Grimsby';
};