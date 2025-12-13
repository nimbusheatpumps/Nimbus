"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Privacy Policy – Nimbus Boilers & Heat Pumps",
  description: "Privacy policy for Nimbus Boilers & Heat Pumps."
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
            Privacy Policy – Nimbus Boilers & Heat Pumps
          </motion.h1>

          <motion.div className="bg-white rounded-xl shadow-md p-8 space-y-6" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                At Nimbus Boilers & Heat Pumps, we collect personal information from you when you submit a quote request through our form. This includes your name, phone number, email address, and postcode.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                The information we collect is used solely for the purpose of providing you with quotes for our boiler services. We do not use your data for any other purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, share, or transfer your personal information to third parties under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under UK data protection laws, you have the right to access, rectify, or erase your personal information. If you wish to exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact Nimbus Boilers & Heat Pumps.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Last updated: 12 December 2025
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}