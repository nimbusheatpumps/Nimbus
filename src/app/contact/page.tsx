"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const metadata = {
  title: "Contact Nimbus Heat Pumps | Boiler Quotes Scunthorpe North Lincolnshire",
  description: "Get in touch for Worcester Bosch boiler installation in Scunthorpe. Call 01724 123456 or use our contact form. Serving North Lincolnshire."
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  subject: string;
  message: string;
}

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
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center"
            variants={itemVariants}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-8 text-center"
            variants={itemVariants}
          >
            Ready to get your gas boiler serviced? Contact us today for reliable gas boiler services in North Lincolnshire. We're here to help with installations, repairs, and maintenance.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-semibold text-teal-800 mb-6">Get In Touch</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">3 Crossbeck Road<br />Scunthorpe<br />North Lincolnshire<br />DN16 3HR</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:01724622069" className="text-gray-600 hover:text-teal-600">01724 622069</a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:info@nimbusheatpumps.co.uk" className="text-gray-600 hover:text-teal-600">info@nimbusheatpumps.co.uk</a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">Gas Safe Registration</h3>
                    <p className="text-gray-600">966812</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">Service Areas</h3>
                    <p className="text-gray-600">Scunthorpe, Grimsby, Doncaster, Lincoln, and surrounding areas</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Find Us</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.1234567890123!2d-0.654321!3d53.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878c1234567890%3A0xabcdef1234567890!2s3%20Crossbeck%20Road%2C%20Scunthorpe%2C%20North%20Lincolnshire%20DN16%203HR!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                      width="100%"
                      height="300"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-semibold text-teal-800 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Your Postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="boiler-installation">Boiler Installation</option>
                      <option value="boiler-repair">Boiler Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="quote">Get a Quote</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 focus:border-orange-500 p-4 shadow-sm font-inter placeholder-gray-500"
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-6 rounded-xl shadow-lg flex items-center gap-2 z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Message sent successfully!
        </div>
      )}
    </div>
  );
}