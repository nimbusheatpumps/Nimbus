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
    <footer className="bg-teal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/wp-content/uploads/2025/06/Nimbus-Heat-Pumps-Logo.png"
              alt="Nimbus Heat Pumps Logo"
              width={128}
              height={128}
              className="w-32 mb-4"
            />
            <h2 className="text-xl font-bold">Nimbus Heat Pumps</h2>
          </div>
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul className="space-y-1">
              <li><Link href="/services" className="hover:underline">Boiler Installation</Link></li>
              <li><Link href="/services" className="hover:underline">Repairs & Maintenance</Link></li>
              <li><Link href="/services" className="hover:underline">New Boiler Quotes</Link></li>
              <li><Link href="/services" className="hover:underline">Emergency Callouts</Link></li>
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
            <p>Address: Scunthorpe, DN15 8QR</p>
            <Image
              src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
              alt="Gas Safe Registered"
              width={96}
              height={96}
              className="w-24 mt-4"
            />
            <p>Gas Safe: 966812</p>
          </div>
        </div>
        <div className="text-center py-4 border-t border-teal-700">
          © 2025 Nimbus Heat Pumps. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;