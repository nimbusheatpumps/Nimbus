"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Worcester Bosch Boiler Services Scunthorpe | Installation & Repairs North Lincolnshire",
  description: "Comprehensive Worcester Bosch boiler services in Scunthorpe, North Lincolnshire. Installation, repairs, servicing, and landlord certificates. Gas Safe engineers."
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

export default function ServicesPage() {
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
            Worcester Bosch Boiler Ranges - Perfect for North Lincolnshire Homes
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 text-center mb-12"
            variants={itemVariants}
          >
            Discover the ultimate gas boiler solutions designed to keep your North Lincolnshire home warm and efficient,
            even during our harsh winters. Choose from our premium Worcester Bosch ranges for reliable heating and hot water.
          </motion.p>

          {/* Greenstar 1000 */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Greenstar 1000 Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src="/images/worcester-bosch/WB_1000.jpg" alt="Greenstar 1000 Boiler" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  The Greenstar 1000 is our entry-level combi boiler, perfect for smaller North Lincolnshire homes and apartments.
                  With its compact design and high efficiency, it's ideal for properties with 1-2 bedrooms where space is at a premium.
                </p>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Key Features & Benefits:</h3>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Compact footprint - fits easily in kitchens or utility rooms</li>
                  <li>• High efficiency up to 94% - reduces energy bills in our cold climate</li>
                  <li>• Built-in frost protection - essential for North Lincolnshire winters</li>
                  <li>• Quiet operation - won't disturb your household</li>
                  <li>• 5-year warranty for peace of mind</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Suitable for:</strong> 1-2 bedroom homes, flats, and smaller properties in Scunthorpe, Brigg, and Barton-upon-Humber.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Greenstar 2000 */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Greenstar 2000 Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src="/images/worcester-bosch/Worcs_Condens_2000_Front.jpg" alt="Greenstar 2000 Boiler" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  The Greenstar 2000 system boiler is engineered for larger North Lincolnshire family homes requiring powerful,
                  reliable heating. Its advanced modulation technology ensures consistent warmth throughout our long, cold winters.
                </p>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Key Features & Benefits:</h3>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• High output options up to 32kW - perfect for 3-4 bedroom homes</li>
                  <li>• Advanced weather compensation - adapts to North Lincolnshire's variable climate</li>
                  <li>• Low NOx emissions - environmentally friendly and compliant with local regulations</li>
                  <li>• Intelligent controls with smartphone app integration</li>
                  <li>• 7-year warranty on parts and labour</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Suitable for:</strong> 3-4 bedroom houses in North Lincolnshire, ideal for families in Epworth, Crowle, and Kirton-in-Lindsey.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Greenstar 4000 */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Greenstar 4000 Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src="/images/worcester-bosch/4000_Front_Facing.jpg" alt="Greenstar 4000 Boiler" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  The Greenstar 4000 combi boiler combines cutting-edge technology with exceptional performance,
                  making it the perfect choice for discerning North Lincolnshire homeowners who demand the best.
                </p>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Key Features & Benefits:</h3>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Premium build quality with stainless steel heat exchanger</li>
                  <li>• Ultra-quiet operation - ideal for open-plan living</li>
                  <li>• Advanced diagnostics with LCD display</li>
                  <li>• Compatible with solar thermal systems</li>
                  <li>• 10-year warranty on heat exchanger</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Suitable for:</strong> Larger homes and luxury properties in North Lincolnshire, perfect for families in Gainsborough and surrounding areas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Greenstar 8000 */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Greenstar 8000 Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src="/images/worcester-bosch/Worcester_Bosch_8000_Front_1.jpg" alt="Greenstar 8000 Boiler" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  The flagship Greenstar 8000 series represents the pinnacle of Worcester Bosch engineering,
                  designed for North Lincolnshire homeowners who want uncompromising performance and luxury features.
                </p>
                <h3 className="text-xl font-semibold text-teal-700 mb-2">Key Features & Benefits:</h3>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Industry-leading efficiency up to 98%</li>
                  <li>• Premium styling with multiple finish options</li>
                  <li>• Advanced smart home integration</li>
                  <li>• Built-in hot water priority system</li>
                  <li>• 12-year warranty on major components</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Suitable for:</strong> High-end homes and properties in North Lincolnshire seeking the ultimate in comfort and efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Table */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">Installation Pricing Guide</h2>
            <p className="text-gray-700 text-center mb-6">
              Complete installation packages including boiler, flue, pipework, and commissioning. All prices include VAT and our standard warranty.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Model</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">kW Output</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Installation Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Greenstar 1000</td>
                    <td className="border border-gray-300 px-4 py-2">24kW</td>
                    <td className="border border-gray-300 px-4 py-2">£1,790</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Greenstar 1000</td>
                    <td className="border border-gray-300 px-4 py-2">30kW</td>
                    <td className="border border-gray-300 px-4 py-2">£1,950</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Greenstar 2000</td>
                    <td className="border border-gray-300 px-4 py-2">18kW</td>
                    <td className="border border-gray-300 px-4 py-2">£2,150</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Greenstar 2000</td>
                    <td className="border border-gray-300 px-4 py-2">25kW</td>
                    <td className="border border-gray-300 px-4 py-2">£2,350</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Greenstar 2000</td>
                    <td className="border border-gray-300 px-4 py-2">32kW</td>
                    <td className="border border-gray-300 px-4 py-2">£2,550</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Greenstar 4000</td>
                    <td className="border border-gray-300 px-4 py-2">29kW</td>
                    <td className="border border-gray-300 px-4 py-2">£2,750</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Greenstar 4000</td>
                    <td className="border border-gray-300 px-4 py-2">35kW</td>
                    <td className="border border-gray-300 px-4 py-2">£2,950</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Greenstar 8000</td>
                    <td className="border border-gray-300 px-4 py-2">30kW</td>
                    <td className="border border-gray-300 px-4 py-2">£3,250</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Greenstar 8000</td>
                    <td className="border border-gray-300 px-4 py-2">40kW</td>
                    <td className="border border-gray-300 px-4 py-2">£3,450</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              *Prices are guide prices for standard installations. Actual costs may vary based on specific requirements and property access.
            </p>
          </motion.div>

          {/* Emergency Repairs */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Emergency Repairs - 24/7 Service</h2>
            <p className="text-gray-700 mb-4">
              When your boiler breaks down in the middle of a North Lincolnshire winter, you need fast, reliable emergency repairs.
              Our Gas Safe registered engineers are available 24 hours a day, 7 days a week to restore your heating quickly.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Why Choose Our Emergency Service?</h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• <strong>Fast Response:</strong> Same-day call-out for urgent repairs</li>
              <li>• <strong>Local Expertise:</strong> Deep knowledge of North Lincolnshire properties and common issues</li>
              <li>• <strong>Genuine Parts:</strong> Only use authentic Worcester Bosch components</li>
              <li>• <strong>Fixed Price Quotes:</strong> No hidden charges or surprise bills</li>
              <li>• <strong>Comprehensive Warranty:</strong> 12-month guarantee on all repair work</li>
            </ul>
            <p className="text-gray-700">
              Call us now on <strong>01724 123456</strong> for immediate assistance. Don't let a cold North Lincolnshire night ruin your comfort!
            </p>
          </motion.div>

          {/* Annual Servicing */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Annual Servicing - Protect Your Investment</h2>
            <p className="text-gray-700 mb-4">
              Regular boiler servicing is essential for maintaining efficiency and preventing costly breakdowns,
              especially important in North Lincolnshire's harsh climate where your heating system works harder.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Our Maintenance Packages:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Essential Service - £85</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Safety checks and gas tightness test</li>
                  <li>• Combustion analysis</li>
                  <li>• Basic cleaning and inspection</li>
                  <li>• Performance report</li>
                </ul>
              </div>
              <div className="border border-teal-200 rounded-lg p-4 bg-teal-50">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Premium Service - £125</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• All Essential Service checks</li>
                  <li>• Deep clean of heat exchanger</li>
                  <li>• Water quality analysis</li>
                  <li>• System optimization</li>
                  <li>• Priority booking and reminders</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Benefits:</strong> Reduce energy bills by up to 15%, extend boiler life by years, prevent winter breakdowns,
              and maintain manufacturer warranty eligibility. Book your annual service today!
            </p>
          </motion.div>

          {/* Landlord Certificates */}
          <motion.div className="bg-white rounded-xl shadow-md p-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Landlord Certificates - Gas Safety Certificates</h2>
            <p className="text-gray-700 mb-4">
              As a North Lincolnshire landlord, ensuring your rental properties comply with gas safety regulations is not just good practice - it's the law.
              We provide comprehensive Gas Safety Certificates (CP12) and landlord safety checks.
            </p>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Legal Requirements & Our Services:</h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• <strong>Annual Gas Safety Certificates:</strong> Mandatory for all rented properties</li>
              <li>• <strong>Electrical Safety Checks:</strong> EICR certificates for peace of mind</li>
              <li>• <strong>Energy Performance Certificates:</strong> EPC assessments for new tenancies</li>
              <li>• <strong>Emergency Contact Details:</strong> 24/7 support for tenants</li>
              <li>• <strong>Insurance Compliance:</strong> Documentation for landlord insurance</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Pricing:</strong> Gas Safety Certificate from £75, Electrical Safety Check from £120,
              Combined Landlord Pack from £180 (saving £15).
            </p>
            <p className="text-gray-700">
              Protect yourself from hefty fines and ensure your North Lincolnshire properties are safe and compliant.
              Contact us today for your free no-obligation quote.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}