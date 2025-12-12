"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Terms & Conditions | Nimbus Heat Pumps Scunthorpe",
  description: "Terms and conditions for services provided by Nimbus Heat Pumps in Scunthorpe and North Lincolnshire."
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center"
            variants={itemVariants}
          >
            Terms and Conditions
          </motion.h1>

          <motion.div className="bg-white rounded-xl shadow-md p-8 space-y-6" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Nimbus Heat Pumps' services, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Services</h2>
              <p className="text-gray-700 mb-4">
                We provide gas boiler installation, repair, and maintenance services. All work is carried out by
                qualified Gas Safe registered engineers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                All prices quoted are valid for 30 days. Payment is due upon completion of work unless otherwise agreed.
                We accept various payment methods including cash, bank transfer, and card payments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Warranties</h2>
              <p className="text-gray-700 mb-4">
                We provide warranties on our workmanship and installed equipment as specified at the time of quote.
                Manufacturer warranties apply to equipment supplied.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the value of the services provided. We are not liable for consequential
                losses or damages unless caused by our negligence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Cancellation</h2>
              <p className="text-gray-700 mb-4">
                Cancellations must be made at least 24 hours before the scheduled appointment. Late cancellations
                may incur a charge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Data Protection</h2>
              <p className="text-gray-700 mb-4">
                We handle your personal data in accordance with our Privacy Policy and applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions regarding these terms, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: info@nimbusheatpumps.co.uk<br />
                Phone: 01724 622069<br />
                Address: 3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Last updated: December 2024
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}