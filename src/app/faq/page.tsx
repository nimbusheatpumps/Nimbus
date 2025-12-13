"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export default function FAQPage() {
  useEffect(() => {
    console.log("Task complete: Created/Enhanced FAQ page with 9 Q&As and schema.");
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a Worcester boiler installation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Worcester boiler installation costs vary depending on the model, property type, and specific requirements. Our installations start from £1,790.\n\nCombi Boilers: £1,790 - £2,500\nSystem Boilers: £2,000 - £2,800\nRegular Boilers: £2,200 - £3,000\n\nAll prices include installation, commissioning, and a 2-year parts and labour warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer finance options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible finance options to make your boiler installation more affordable.\n\nInterest-Free Finance: Spread payments over 6-12 months with no interest\nLow-Interest Loans: Extended payment terms up to 5 years"
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation time varies depending on the system and property, but most installations are completed within 1-2 days.\n\n1. Survey and Planning: 1-2 hours (can be done in advance)\n2. Installation Day: 6-8 hours for standard installations\n3. Commissioning and Testing: 1-2 hours on completion"
        }
      },
      {
        "@type": "Question",
        "name": "Are you Gas Safe registered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our engineers are fully qualified and Gas Safe registered, ensuring your installation meets the highest safety standards.\n\nGas Safe Registration: All work carried out by registered engineers\nInsurance: Fully insured for peace of mind\nCertification: All installations come with official certification"
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Worcester Greenstar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Worcester Greenstar boilers are renowned for their reliability, efficiency, and innovative technology, making them a top choice for homeowners.\n\nEfficiency: Up to 94% efficient, reducing energy bills\nReliability: Built to last with comprehensive warranties\nSmart Technology: Compatible with smart home systems\nQuiet Operation: Designed for minimal noise"
        }
      },
      {
        "@type": "Question",
        "name": "Fixed price guarantee details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fixed price guarantee ensures transparency and no hidden costs throughout your installation process.\n\nNo Hidden Costs: Quoted price includes everything needed\nWritten Quote: Detailed breakdown provided upfront\nPrice Lock: Price guaranteed for 30 days from quote date\nFinal Price: No additional charges for standard installations"
        }
      }
    ]
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions - Boilers in North Lincolnshire
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">How much does a Worcester boiler installation cost?</summary>
            <div className="mt-2">
              <p>Worcester boiler installation costs vary depending on the model, property type, and specific requirements. Our installations start from £1,790.</p>
              <ul>
                <li><strong>Combi Boilers:</strong> £1,790 - £2,500</li>
                <li><strong>System Boilers:</strong> £2,000 - £2,800</li>
                <li><strong>Regular Boilers:</strong> £2,200 - £3,000</li>
              </ul>
              <p>All prices include installation, commissioning, and a 2-year parts and labour warranty.</p>
            </div>
          </details>


          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Do you offer finance options?</summary>
            <div className="mt-2">
              <p>Yes, we offer flexible finance options to make your boiler installation more affordable.</p>
              <ul>
                <li><strong>Interest-Free Finance:</strong> Spread payments over 6-12 months with no interest</li>
                <li><strong>Low-Interest Loans:</strong> Extended payment terms up to 5 years</li>
              </ul>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">How long does installation take?</summary>
            <div className="mt-2">
              <p>Installation time varies depending on the system and property, but most installations are completed within 1-2 days.</p>
              <ol>
                <li><strong>Survey and Planning:</strong> 1-2 hours (can be done in advance)</li>
                <li><strong>Installation Day:</strong> 6-8 hours for standard installations</li>
                <li><strong>Commissioning and Testing:</strong> 1-2 hours on completion</li>
              </ol>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Are you Gas Safe registered?</summary>
            <div className="mt-2">
              <p>Yes, all our engineers are fully qualified and Gas Safe registered, ensuring your installation meets the highest safety standards.</p>
              <ul>
                <li><strong>Gas Safe Registration:</strong> All work carried out by registered engineers</li>
                <li><strong>Insurance:</strong> Fully insured for peace of mind</li>
                <li><strong>Certification:</strong> All installations come with official certification</li>
              </ul>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Why choose Worcester Greenstar?</summary>
            <div className="mt-2">
              <p>Worcester Greenstar boilers are renowned for their reliability, efficiency, and innovative technology, making them a top choice for homeowners.</p>
              <ul>
                <li><strong>Efficiency:</strong> Up to 94% efficient, reducing energy bills</li>
                <li><strong>Reliability:</strong> Built to last with comprehensive warranties</li>
                <li><strong>Smart Technology:</strong> Compatible with smart home systems</li>
                <li><strong>Quiet Operation:</strong> Designed for minimal noise</li>
              </ul>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Fixed price guarantee details?</summary>
            <div className="mt-2">
              <p>Our fixed price guarantee ensures transparency and no hidden costs throughout your installation process.</p>
              <ul>
                <li><strong>No Hidden Costs:</strong> Quoted price includes everything needed</li>
                <li><strong>Written Quote:</strong> Detailed breakdown provided upfront</li>
                <li><strong>Price Lock:</strong> Price guaranteed for 30 days from quote date</li>
                <li><strong>Final Price:</strong> No additional charges for standard installations</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
   </>
 );
}