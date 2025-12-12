"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Privacy Policy | Nimbus Heat Pumps Scunthorpe",
  description: "Privacy policy for Nimbus Heat Pumps, serving Scunthorpe and North Lincolnshire with Worcester Bosch boilers."
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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>

          <motion.div className="bg-white rounded-xl shadow-md p-8 space-y-6" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you contact us for quotes, request services,
                or communicate with us. This may include your name, email address, phone number, and property details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Provide and improve our services</li>
                <li>• Communicate with you about your inquiries</li>
                <li>• Send you relevant information about our services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                except as described in this policy or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of receiving
                marketing communications from us at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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