import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" id="services-heading">Services</h3>
            <ul className="space-y-2" aria-labelledby="services-heading">
              <li><Link href="/boilers" className="hover:underline" aria-label="Boiler services">Boiler</Link></li>
              <li><Link href="/heat-pumps" className="hover:underline" aria-label="Heat pump services">Heat Pumps</Link></li>
              <li><Link href="/maintenance" className="hover:underline" aria-label="Maintenance services">Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4" id="locations-heading">Locations</h3>
            <ul className="space-y-2" aria-labelledby="locations-heading">
              <li><Link href="/locations/scunthorpe" className="hover:underline" aria-label="Scunthorpe location">Scunthorpe</Link></li>
              <li><Link href="/locations/lincoln" className="hover:underline" aria-label="Lincoln location">Lincoln</Link></li>
              <li><Link href="/locations/hull" className="hover:underline" aria-label="Hull location">Hull</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4" id="contact-heading">Contact</h3>
            <address className="not-italic" aria-labelledby="contact-heading">
              3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR, GB<br />
              Phone: 01724 622069<br />
              Email: info@nimbusheatpumps.co.uk
            </address>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Opening Hours</h4>
              <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="mt-4 flex items-center">
              <Image
                src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
                alt="Gas Safe registered heating engineer badge 966812"
                width={80}
                height={80}
                className="mr-3"
              />
              <div>
                <p className="text-sm font-semibold">Gas Safe Registered</p>
                <p className="text-sm">Registration: 966812</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4" id="social-heading">Social</h3>
            <ul className="space-y-2" aria-labelledby="social-heading">
              <li><a href="https://facebook.com/nimbusheatpumps" className="hover:underline" aria-label="Facebook page" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/nimbusheatpumps" className="hover:underline" aria-label="Twitter page" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com/company/nimbusheatpumps" className="hover:underline" aria-label="LinkedIn page" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Nimbus Heat Pumps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;