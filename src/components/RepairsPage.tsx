"use client";

import * as React from "react";
import { motion } from "framer-motion";
import BoilerQuoteForm from '../../components/BoilerQuoteForm';

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

export default function RepairsPage() {
  const [issuesOpen, setIssuesOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);
  const [pricingOpen, setPricingOpen] = React.useState(false);
  const [whyOpen, setWhyOpen] = React.useState(false);

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
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-teal-900 mb-6">
              Fast Boiler Repairs & Servicing - 24/7 Gas Safe in Scunthorpe, Grimsby, Hull
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional boiler repairs and servicing across North Lincolnshire. Gas Safe registered engineers, same-day response, no callout fees.
            </p>
          </motion.div>

          {/* Common Boiler Issues */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Common Boiler Issues We Fix</h2>
            <div className="md:hidden">
              <button
                onClick={() => setIssuesOpen(!issuesOpen)}
                className="w-full text-left text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center"
              >
                Common Issues
                <svg className={`w-5 h-5 transform transition-transform ${issuesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`md:block ${issuesOpen ? 'block' : 'hidden'}`}>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Water leaks and pressure loss</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.409l-7-14z" />
                  </svg>
                  <span className="text-gray-700">No hot water or heating</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Strange noises or vibrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Pilot light or ignition problems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Our Repair Process */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Our Repair Process</h2>
            <div className="md:hidden">
              <button
                onClick={() => setProcessOpen(!processOpen)}
                className="w-full text-left text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center"
              >
                Repair Steps
                <svg className={`w-5 h-5 transform transition-transform ${processOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`md:block ${processOpen ? 'block' : 'hidden'}`}>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                  <div>
                    <strong className="text-teal-700">Callout & Diagnosis</strong>
                    <p className="text-gray-700 mt-1">Gas Safe engineer arrives within 2 hours for emergencies, conducts full safety checks and diagnoses the issue.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                  <div>
                    <strong className="text-teal-700">Repair Work</strong>
                    <p className="text-gray-700 mt-1">Using genuine Worcester Bosch parts, we fix the problem efficiently with minimal disruption to your home.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                  <div>
                    <strong className="text-teal-700">Testing & Safety Checks</strong>
                    <p className="text-gray-700 mt-1">Full system testing, gas tightness test, and safety certification to ensure everything works perfectly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                  <div>
                    <strong className="text-teal-700">Warranty & Aftercare</strong>
                    <p className="text-gray-700 mt-1">12-month warranty on all repairs, plus ongoing support and priority booking for future servicing.</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Transparent Pricing */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Transparent Pricing</h2>
            <div className="md:hidden">
              <button
                onClick={() => setPricingOpen(!pricingOpen)}
                className="w-full text-left text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center"
              >
                Pricing Table
                <svg className={`w-5 h-5 transform transition-transform ${pricingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`md:block ${pricingOpen ? 'block' : 'hidden'}`}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-teal-800">Service</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-teal-800">Standard</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-teal-800">Emergency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Annual Service</td>
                      <td className="border border-gray-300 px-4 py-3">£90 incl. safety check</td>
                      <td className="border border-gray-300 px-4 py-3">-</td>
                    </tr>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Repairs</td>
                      <td className="border border-gray-300 px-4 py-3">£80/hr + parts fixed</td>
                      <td className="border border-gray-300 px-4 py-3">+20% premium (max £500)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *No callout fees. All prices include VAT. Emergency premium capped at £500. Much more competitive than local competitors.
              </p>
            </div>
          </motion.div>

          {/* Why Nimbus for Repairs */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-teal-800 mb-6">Why Nimbus for Repairs?</h2>
            <div className="md:hidden">
              <button
                onClick={() => setWhyOpen(!whyOpen)}
                className="w-full text-left text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center"
              >
                Why Choose Us
                <svg className={`w-5 h-5 transform transition-transform ${whyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`md:block ${whyOpen ? 'block' : 'hidden'}`}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Worcester Bosch accredited engineers with manufacturer training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Same-day repairs in 80% of cases across North Lincolnshire</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No callout fees - we only charge for the work done</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Seamless tie-in with our installation and finance services</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="bg-teal-50 p-8 mb-8 rounded-xl"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-700 italic mb-4">"Emergency fix in Brigg - boiler back on in 2 hours. Professional service, fair pricing."</p>
                <p className="text-sm text-gray-500">- Sarah M., Brigg</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-700 italic mb-4">"Same-day repair in Scunthorpe. No callout fee, genuine parts. Highly recommend."</p>
                <p className="text-sm text-gray-500">- Mike T., Scunthorpe</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-700 italic mb-4">"Annual service at £90 - thorough and professional. Winter ready now!"</p>
                <p className="text-sm text-gray-500">- Emma L., Barton-upon-Humber</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-8 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Book Your Boiler Service Today</h2>
            <p className="text-xl mb-8 text-center">Get a fixed-price quote for repairs or servicing. No obligation, same-day response.</p>
            <div className="max-w-2xl mx-auto">
              <BoilerQuoteForm fullPage={true} />
            </div>
          </motion.div>

          {/* Schema Markup */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Boiler Repair",
              "description": "Professional boiler repair and servicing services in North Lincolnshire",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Nimbus Heat Pumps",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Scunthorpe",
                  "addressRegion": "North Lincolnshire",
                  "addressCountry": "GB"
                }
              },
              "areaServed": [
                "Scunthorpe",
                "Grimsby",
                "Hull",
                "Brigg",
                "Barton-upon-Humber",
                "Kirton-in-Lindsey",
                "Epworth",
                "Crowle",
                "Gainsborough"
              ],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Annual Boiler Service",
                  "price": "90",
                  "priceCurrency": "GBP"
                },
                {
                  "@type": "Offer",
                  "name": "Emergency Boiler Repair",
                  "price": "300",
                  "priceCurrency": "GBP"
                }
              ]
            })
          }} />

          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Boiler Repair Process",
              "description": "Step-by-step guide to professional boiler repair service",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Diagnosis",
                  "text": "Gas Safe engineer conducts full safety checks and diagnoses the issue"
                },
                {
                  "@type": "HowToStep",
                  "name": "Repair",
                  "text": "Fix the problem using genuine Worcester Bosch parts"
                },
                {
                  "@type": "HowToStep",
                  "name": "Testing",
                  "text": "Full system testing and safety certification"
                },
                {
                  "@type": "HowToStep",
                  "name": "Warranty",
                  "text": "12-month warranty and ongoing support"
                }
              ]
            })
          }} />
        </motion.div>
      </div>
    </div>
  );

  console.log("Task complete: Created Repairs page with process/pricing/schema for high-search volumes.");
}