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
    <motion.footer
      className="bg-teal-600 text-white py-8 shadow-lg"
      role="contentinfo"
      aria-label="Site footer"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={hoverLift} whileHover="whileHover">
            <h3 className="text-lg font-semibold mb-4" id="services-heading">Services</h3>
            <ul className="space-y-2" aria-labelledby="services-heading">
              <li><Link href="/boilers" className="hover:underline" aria-label="Boiler services">Boiler</Link></li>
              <li><Link href="/heat-pumps" className="hover:underline" aria-label="Heat pump services">Heat Pumps</Link></li>
              <li><Link href="/maintenance" className="hover:underline" aria-label="Maintenance services">Maintenance</Link></li>
            </ul>
          </motion.div>
          <motion.div variants={hoverLift} whileHover="whileHover">
            <h3 className="text-lg font-semibold mb-4" id="locations-heading">Locations</h3>
            <ul className="space-y-2" aria-labelledby="locations-heading">
              <li><Link href="/locations/scunthorpe" className="hover:underline" aria-label="Scunthorpe location">Scunthorpe</Link></li>
              <li><Link href="/locations/lincoln" className="hover:underline" aria-label="Lincoln location">Lincoln</Link></li>
              <li><Link href="/locations/hull" className="hover:underline" aria-label="Hull location">Hull</Link></li>
            </ul>
          </motion.div>
          <motion.div variants={hoverLift} whileHover="whileHover">
            <h3 className="text-lg font-semibold mb-4" id="contact-heading">Contact</h3>
            <address className="not-italic" aria-labelledby="contact-heading">
              3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR, GB<br />
              Phone: <a href="tel:01724622069" className="hover:underline">01724 622069</a><br />
              Email: info@nimbusheatpumps.co.uk
            </address>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Opening Hours</h4>
              <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="mt-4 flex items-center">
              <Image
                src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
                alt="Gas Safe Registered – 966812 heating engineer badge"
                width={80}
                height={80}
                className="mr-3"
              />
              <div>
                <p className="text-sm font-semibold">Gas Safe Registered – 966812</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={hoverLift} whileHover="whileHover">
            <h3 className="text-lg font-semibold mb-4" id="social-heading">Social</h3>
            <div className="flex space-x-4" aria-labelledby="social-heading">
              <a href="https://facebook.com/nimbusheatpumps" aria-label="Facebook page" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/nimbusheatpumps" aria-label="Twitter page" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/nimbusheatpumps" aria-label="LinkedIn page" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Nimbus Heat Pumps. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;