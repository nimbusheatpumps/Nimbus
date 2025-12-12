"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Nimbus Heat Pumps | Gas Safe Boiler Engineers Scunthorpe",
  description: "Meet Bryan Whiteley, director of Nimbus Heat Pumps. 15+ years experience providing reliable Worcester Bosch boilers in Scunthorpe and North Lincolnshire."
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

export default function AboutPage() {
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
            About Nimbus Heat Pumps
          </motion.h1>

          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Our Experience with Gas Boilers</h2>
            <p className="text-gray-700 mb-4">
              With over 15 years of experience in the heating industry, Nimbus Heat Pumps specializes in gas boiler installations and maintenance.
              Our Gas Safe registered engineers have extensive knowledge of all major boiler brands including Worcester Bosch, Ideal, and Baxi.
            </p>
            <p className="text-gray-700 mb-4">
              We understand that every home is different, and our team works closely with customers to provide tailored solutions that meet their heating needs
              while ensuring maximum efficiency and reliability.
            </p>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Services We Offer</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Gas boiler installation and replacement</li>
              <li>• Boiler servicing and maintenance</li>
              <li>• Emergency boiler repairs</li>
              <li>• System upgrades and improvements</li>
              <li>• Energy efficiency assessments</li>
              <li>• Grant applications for heat pump installations</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-md p-8" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Company Background</h2>
            <p className="text-gray-700 mb-4">
              Founded in North Lincolnshire, Nimbus Heat Pumps has built a reputation for quality workmanship and exceptional customer service.
              Our commitment to using only the highest quality materials and staying up-to-date with the latest industry standards ensures that our customers
              receive the best possible heating solutions.
            </p>
            <p className="text-gray-700">
              We serve customers across Scunthorpe, Grimsby, Doncaster, Lincoln, and surrounding areas, providing reliable heating services
              that keep homes warm and comfortable year-round.
            </p>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-md p-8" variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">Meet Bryan Whiteley – Director & Lead Engineer</h2>
            <img
              src="/images/worcester-bosch/iStock-2169699497-scaled.jpg"
              alt="Bryan Whiteley"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <p className="text-gray-700 mb-4">
              Meet Bryan Whiteley, the Director and Lead Engineer at Nimbus Heat Pumps. With over 15 years of hands-on experience in heating engineering, Bryan has dedicated his career to ensuring homes across North Lincolnshire stay warm and comfortable. As a Gas Safe registered engineer (registration number 966812), he brings unparalleled expertise in gas boiler systems, specializing in reliable installations and maintenance that customers can trust.
            </p>
            <p className="text-gray-700 mb-4">
              Bryan's passion for reliable gas boilers stems from his deep understanding of the local climate and the unique heating needs of North Lincolnshire residents. He believes that every home deserves a heating solution that's not just efficient, but dependable – keeping families warm through the coldest winters.
            </p>
            <p className="text-gray-700">
              What sets Bryan apart is his unwavering commitment to customer service. He takes pride in building lasting relationships with his clients, offering personalized advice and ensuring that every job is completed to the highest standards. Whether it's a routine service or an emergency repair, Bryan's approachable nature and technical mastery make him a trusted local expert in the heating industry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}