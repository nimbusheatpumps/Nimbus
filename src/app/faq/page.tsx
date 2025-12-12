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
        "name": "What's the difference between gas boilers and heat pumps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gas boilers burn natural gas to heat water for your home's heating and hot water needs. Heat pumps, on the other hand, extract heat from the air, ground, or water using electricity, making them more energy-efficient and environmentally friendly alternatives.\n\nEnergy Efficiency: Heat pumps can be up to 3 times more efficient than gas boilers\nEnvironmental Impact: Lower carbon emissions compared to fossil fuel-based heating\nRunning Costs: Potentially lower energy bills due to higher efficiency"
        }
      },
      {
        "@type": "Question",
        "name": "Are heat pumps eligible for grants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, heat pumps are eligible for various government grants and incentives designed to encourage the adoption of low-carbon heating solutions.\n\nBoiler Upgrade Scheme (BUS): Up to £8,000 towards installation costs\nGreat British Insulation Scheme: Additional funding for insulation improvements\nLocal Authority Grants: Some areas offer additional local incentives"
        }
      },
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
        "name": "What's the Boiler Upgrade Scheme (BUS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Boiler Upgrade Scheme (BUS) is a government initiative offering grants to help homeowners replace old, inefficient gas boilers with low-carbon alternatives like heat pumps or biomass boilers.\n\nGrant Amount: Up to £8,000 for eligible installations\nEligibility: Must replace a boiler older than 15 years or with an efficiency rating below 92%\nApplication: Available through approved installers like Nimbus Heat Pumps"
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer finance options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible finance options to make your boiler or heat pump installation more affordable.\n\nInterest-Free Finance: Spread payments over 6-12 months with no interest\nLow-Interest Loans: Extended payment terms up to 5 years\nGrant Integration: Finance can be combined with government grants"
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
            Frequently Asked Questions - Boilers & Heat Pumps in North Lincolnshire
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">What's the difference between gas boilers and heat pumps?</summary>
            <div className="mt-2">
              <p>Gas boilers burn natural gas to heat water for your home's heating and hot water needs. Heat pumps, on the other hand, extract heat from the air, ground, or water using electricity, making them more energy-efficient and environmentally friendly alternatives.</p>
              <ul>
                <li><strong>Energy Efficiency:</strong> Heat pumps can be up to 3 times more efficient than gas boilers</li>
                <li><strong>Environmental Impact:</strong> Lower carbon emissions compared to fossil fuel-based heating</li>
                <li><strong>Running Costs:</strong> Potentially lower energy bills due to higher efficiency</li>
              </ul>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Are heat pumps eligible for grants?</summary>
            <div className="mt-2">
              <p>Yes, heat pumps are eligible for various government grants and incentives designed to encourage the adoption of low-carbon heating solutions.</p>
              <ul>
                <li><strong>Boiler Upgrade Scheme (BUS):</strong> Up to £8,000 towards installation costs</li>
                <li><strong>Great British Insulation Scheme:</strong> Additional funding for insulation improvements</li>
                <li><strong>Local Authority Grants:</strong> Some areas offer additional local incentives</li>
              </ul>
            </div>
          </details>

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
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">What's the Boiler Upgrade Scheme (BUS)?</summary>
            <div className="mt-2">
              <p>The Boiler Upgrade Scheme (BUS) is a government initiative offering grants to help homeowners replace old, inefficient gas boilers with low-carbon alternatives like heat pumps or biomass boilers.</p>
              <ul>
                <li><strong>Grant Amount:</strong> Up to £8,000 for eligible installations</li>
                <li><strong>Eligibility:</strong> Must replace a boiler older than 15 years or with an efficiency rating below 92%</li>
                <li><strong>Application:</strong> Available through approved installers like Nimbus Heat Pumps</li>
              </ul>
            </div>
          </details>

          <details className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
            <summary className="font-bold text-[#1E3A8A] cursor-pointer">Do you offer finance options?</summary>
            <div className="mt-2">
              <p>Yes, we offer flexible finance options to make your boiler or heat pump installation more affordable.</p>
              <ul>
                <li><strong>Interest-Free Finance:</strong> Spread payments over 6-12 months with no interest</li>
                <li><strong>Low-Interest Loans:</strong> Extended payment terms up to 5 years</li>
                <li><strong>Grant Integration:</strong> Finance can be combined with government grants</li>
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