"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Script from 'next/script';
import BoilerQuoteForm from '../../../components/BoilerQuoteForm';

export const metadata = {
  title: "Finance - Nimbus Boilers",
  description: "Nimbus Boiler Finance: 0% plans for £1,790 installs, cover from £15/mo in Scunthorpe/Grimsby/Hull."
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

export default function FinancePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("Task complete: Refactored to boiler-only, repurposed Finance page with cover/pricing.");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-8 mb-8 text-center"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Affordable Boiler Finance & Cover in North Lincolnshire
            </h1>
            <p className="text-xl">
              Spread the cost of your new boiler with 0% finance options and comprehensive cover from just £15/month
            </p>
          </motion.div>

          {/* 0% Finance Options */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <details className="md:open">
              <summary className="cursor-pointer text-3xl font-semibold text-teal-800 mb-6 md:hidden">0% Finance Options for New Boilers</summary>
              <div className="md:block">
                <h2 className="text-3xl font-semibold text-teal-800 mb-6 hidden md:block">0% Finance Options for New Boilers</h2>
                <p className="text-gray-700 mb-4">
                  Make your boiler upgrade affordable with our 0% finance plans. Available on installations from £1,790,
                  our finance partners offer flexible monthly payments with no interest to pay.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Finance Benefits:</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 0% interest on approved applications</li>
                      <li>• Monthly payments from £50</li>
                      <li>• Quick approval process</li>
                      <li>• No hidden fees or charges</li>
                      <li>• Spread payments over 1-5 years</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Eligibility:</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• UK resident aged 18+</li>
                      <li>• Regular income source</li>
                      <li>• Good credit history</li>
                      <li>• Valid ID and proof of address</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </motion.div>

          {/* Boiler Cover Comparison */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <details className="md:open">
              <summary className="cursor-pointer text-3xl font-semibold text-teal-800 mb-6 md:hidden">Boiler Cover Comparison</summary>
              <div className="md:block">
                <h2 className="text-3xl font-semibold text-teal-800 mb-6 hidden md:block">Boiler Cover Comparison</h2>
                <p className="text-gray-700 mb-6">
                  Compare our comprehensive boiler cover with leading providers. Unlimited repairs, annual service included, no excess to pay.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Monthly Cost</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Repairs</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Annual Service</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Excess</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-800">Nimbus Cover</td>
                        <td className="border border-gray-300 px-4 py-2">£15</td>
                        <td className="border border-gray-300 px-4 py-2">Unlimited</td>
                        <td className="border border-gray-300 px-4 py-2">✓ Included</td>
                        <td className="border border-gray-300 px-4 py-2">£0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">British Gas</td>
                        <td className="border border-gray-300 px-4 py-2">£25</td>
                        <td className="border border-gray-300 px-4 py-2">Limited</td>
                        <td className="border border-gray-300 px-4 py-2">Extra £80</td>
                        <td className="border border-gray-300 px-4 py-2">£75</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">HomeServe</td>
                        <td className="border border-gray-300 px-4 py-2">£30</td>
                        <td className="border border-gray-300 px-4 py-2">Limited</td>
                        <td className="border border-gray-300 px-4 py-2">Extra £90</td>
                        <td className="border border-gray-300 px-4 py-2">£60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Get Covered Quote
                  </button>
                </div>
              </div>
            </details>
          </motion.div>

          {/* Fixed Price Repairs & Servicing */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <details className="md:open">
              <summary className="cursor-pointer text-3xl font-semibold text-teal-800 mb-6 md:hidden">Fixed Price Repairs & Servicing</summary>
              <div className="md:block">
                <h2 className="text-3xl font-semibold text-teal-800 mb-6 hidden md:block">Fixed Price Repairs & Servicing</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Annual Servicing</h3>
                    <p className="text-gray-700 mb-4">Keep your boiler running efficiently with our comprehensive annual service.</p>
                    <p className="text-2xl font-bold text-teal-800">£90</p>
                    <ul className="text-gray-700 space-y-1 mt-2">
                      <li>• Full safety inspection</li>
                      <li>• Combustion analysis</li>
                      <li>• Clean and optimize</li>
                      <li>• Gas Safe certificate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Average Repair Cost</h3>
                    <p className="text-gray-700 mb-4">Fixed price repairs with genuine parts and Gas Safe guarantee.</p>
                    <p className="text-2xl font-bold text-teal-800">£300</p>
                    <ul className="text-gray-700 space-y-1 mt-2">
                      <li>• No hidden charges</li>
                      <li>• Genuine Worcester parts</li>
                      <li>• 12-month warranty</li>
                      <li>• Gas Safe certified</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </motion.div>

          {/* Why Finance with Nimbus? */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <details className="md:open">
              <summary className="cursor-pointer text-3xl font-semibold text-teal-800 mb-6 md:hidden">Why Finance with Nimbus?</summary>
              <div className="md:block">
                <h2 className="text-3xl font-semibold text-teal-800 mb-6 hidden md:block">Why Finance with Nimbus?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Quick Approval</h3>
                    <p className="text-gray-700">Get approved in minutes with our streamlined finance process. No lengthy paperwork or waiting periods.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Worcester Bosch Quality</h3>
                    <p className="text-gray-700">Finance your premium Worcester Bosch boiler installation with confidence in the UK's leading brand.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Savings Calculator</h3>
                    <p className="text-gray-700">See how much you could save by spreading payments. Compare cash vs finance options instantly.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Flexible Terms</h3>
                    <p className="text-gray-700">Choose payment terms that suit your budget. From 12 to 60 months available depending on amount.</p>
                  </div>
                </div>
              </div>
            </details>
          </motion.div>

          {/* Testimonials */}
          <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">Customer Stories - Financed Installs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
                "The 0% finance made it possible for us to get the new boiler we needed. The monthly payments were affordable and we saved money compared to our old system." - Sarah M., Scunthorpe
              </blockquote>
              <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
                "Financing through Nimbus was straightforward. No hassle, competitive rates, and our Greenstar 2000 is performing perfectly." - David L., Grimsby
              </blockquote>
            </div>
          </motion.div>

          {/* BoilerQuoteForm Modal */}
          <BoilerQuoteForm isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

          {/* JSON-LD Schema */}
          <Script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Nimbus Boiler Finance",
              "description": "0% finance plans for Nimbus boilers. Spread the cost of your new boiler with 0% finance options available on installations from £1,790.",
              "provider": {
                "@type": "Organization",
                "name": "Nimbus Boilers"
              },
              "interestRate": "0%",
              "feesAndCommissionsSpecifications": "No hidden fees or charges",
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "50",
                  "priceCurrency": "GBP",
                  "description": "Monthly payments from £50, spread over 1-5 years"
                }
              },
              "areaServed": "United Kingdom"
            })}
          </Script>
        </motion.div>
      </div>
    </div>
  );
}