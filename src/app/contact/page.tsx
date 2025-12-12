"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BoilerQuoteForm from '../../../components/BoilerQuoteForm';
import { Button } from '../../../components/ui/button';

export const metadata = {
  title: "Contact Nimbus Boilers & Heat Pumps | Boiler Quotes Scunthorpe North Lincolnshire",
  description: "Get in touch with Nimbus Boilers & Heat Pumps for Worcester Bosch boiler installation in Scunthorpe. Call 01724 622069 or use our contact form. Serving North Lincolnshire."
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center leading-1.5"
            variants={itemVariants}
          >
            Contact Nimbus Boilers & Heat Pumps
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 mb-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] p-8">
                <h2 className="text-2xl font-semibold text-teal-800 mb-6 leading-1.5">Get In Touch</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 leading-1.5">Phone</h3>
                    <a href="tel:01724622069" className="text-gray-600 hover:text-[#3B82F6] leading-1.5">01724 622069</a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 leading-1.5">Email</h3>
                    <a href="mailto:info@nimbusheatpumps.co.uk" className="text-gray-600 hover:text-[#3B82F6] leading-1.5">info@nimbusheatpumps.co.uk</a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 leading-1.5">Address</h3>
                    <p className="text-gray-600 leading-1.5">3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 leading-1.5">Opening Hours</h3>
                    <p className="text-gray-600 leading-1.5">Monday–Friday 8am–6pm<br />Saturday 9am–1pm</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button variant="orange" asChild>
                      <a href="tel:01724622069">Call Now</a>
                    </Button>
                    <Button variant="orange" asChild>
                      <a href="mailto:info@nimbusheatpumps.co.uk">Email Us</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl xs:shadow-sm sm:shadow-md hover:shadow-xl shadow-[0_4px_6px_-1px_rgba(30,58,138,0.2)] p-8">
                <h2 className="text-2xl font-semibold text-teal-800 mb-6 leading-1.5">Find Us</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.1234567890123!2d-0.654321!3d53.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878b1234567890%3A0xabcdef1234567890!2s3%20Crossbeck%20Road%2C%20Scunthorpe%2C%20North%20Lincolnshire%2C%20DN16%203HR%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Quote Form */}
          <motion.div variants={itemVariants}>
            <BoilerQuoteForm fullPage={true} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}