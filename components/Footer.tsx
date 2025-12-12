import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const hoverLift = {
    whileHover: { y: -10 },
  };

  return (
    <footer className="bg-teal-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <Image
              src="/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
              alt="Nimbus Heat Pumps Logo"
              width={128}
              height={128}
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-32 mb-4"
              onError={() => {}}
            />
            <h2 className="text-xl font-bold">Nimbus Heat Pumps</h2>
          </div>
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul className="space-y-1">
              <li><Link href="/services" className="hover:underline hover:text-orange-500">Boiler Installation</Link></li>
              <li><Link href="/services" className="hover:underline hover:text-orange-500">Repairs & Maintenance</Link></li>
              <li><Link href="/services" className="hover:underline hover:text-orange-500">New Boiler Quotes</Link></li>
              <li><Link href="/services" className="hover:underline hover:text-orange-500">Emergency Callouts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Locations</h3>
            <ul className="space-y-1">
              <li>Scunthorpe</li>
              <li>North Lincolnshire</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Phone: <a href="tel:01724622069" className="text-orange-400 font-bold hover:underline">01724 622069</a></p>
            <p>Email: info@nimbusheatpumps.co.uk</p>
            <p className="text-gray-300">3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR</p>
            <Image
              src="/gas-safe-badge.png"
              alt="Gas Safe Registered 966812"
              width={150}
              height={100}
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-2"
              onError={() => {}}
            />
            <p className="text-orange-400 font-bold">Gas Safe Registered – 966812</p>
          </div>
        </div>
        <p className="col-span-full text-center text-gray-400 mt-4">&copy; 2025 Nimbus Boilers & Heat Pumps. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;