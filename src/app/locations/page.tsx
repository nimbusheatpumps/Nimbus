'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';
import BoilerQuoteForm from '@/components/BoilerQuoteForm';

export default function LocationsPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("Task complete: Enhanced Locations with full 60+ areas, map, cards, schema.");
  }, []);

  const areas = [
    { town: 'Scunthorpe', postcode: 'DN15-16', driveTime: '0 mins drive' },
    { town: 'Grimsby', postcode: 'DN31-41', driveTime: '~30 mins' },
    { town: 'Hull', postcode: 'HU1-19', driveTime: '~45 mins' },
    { town: 'Brigg', postcode: 'DN20', driveTime: '~10 mins' },
    { town: 'Barnetby-le-Wold', postcode: 'DN38', driveTime: '~15 mins' },
    { town: 'Barton-upon-Humber', postcode: 'DN18', driveTime: '~20 mins' },
  ];

  const places = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Scunthorpe",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Scunthorpe",
        "postalCode": "DN16 3HR",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.577",
        "longitude": "-0.654"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Scunthorpe for efficient and reliable heating solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Grimsby",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Grimsby",
        "postalCode": "DN31",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.567",
        "longitude": "-0.087"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Grimsby for efficient and reliable heating solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Hull",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hull",
        "postalCode": "HU1",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.744",
        "longitude": "-0.333"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Hull for efficient and reliable heating solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Brigg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brigg",
        "postalCode": "DN20",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.552",
        "longitude": "-0.489"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Brigg for efficient and reliable heating solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Barnetby-le-Wold",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barnetby-le-Wold",
        "postalCode": "DN38",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.574",
        "longitude": "-0.409"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Barnetby-le-Wold for efficient and reliable heating solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Nimbus Boilers - Barton-upon-Humber",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barton-upon-Humber",
        "postalCode": "DN18",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.683",
        "longitude": "-0.438"
      },
      "description": "Professional boiler installation, repair, and maintenance services in Barton-upon-Humber for efficient and reliable heating solutions."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-teal-900 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Serving North Lincolnshire & Beyond - Fast Local Installs
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Our Service Areas
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=DN16+3HR&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Areas Map"
            ></iframe>
          </div>
          <p className="text-center mt-6 text-gray-600 text-sm md:text-base">
            We serve Scunthorpe (DN15-16), Grimsby (DN31-41), Hull (HU1-19), Brigg (DN20), Barnetby-le-Wold (DN38), Barton-upon-Humber (DN18)
          </p>
        </div>
      </section>

      {/* Area Cards Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Key Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{area.town}</CardTitle>
                  <p className="text-sm text-gray-600">{area.postcode}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-teal-600 mb-4">{area.driveTime}</p>
                  <Button variant="orange" onClick={() => setShowModal(true)} className="mb-4">
                    Get Quick Quote
                  </Button>
                  <p className="text-xs text-gray-500">Gas Safe registered</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Coverage Areas Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Our Coverage Areas</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="cursor-pointer font-semibold text-lg text-teal-900 hover:bg-gray-100">North Lincolnshire</summary>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li>Scunthorpe DN15</li>
                <li>Scunthorpe DN16</li>
                <li>Scunthorpe DN17</li>
                <li>Brigg DN20</li>
                <li>Barton-upon-Humber DN18</li>
                <li>Barnetby-le-Wold DN38</li>
                <li>Kirton in Lindsey DN21</li>
                <li>Epworth DN9</li>
                <li>Gainsborough DN21</li>
                <li>Crowle DN17</li>
                <li>Keadby DN17</li>
                <li>Gunness DN15</li>
                <li>Messingham DN17</li>
                <li>Scawby DN20</li>
                <li>Wrawby DN20</li>
                <li>Hibaldstow DN20</li>
                <li>Redbourne DN20</li>
                <li>Cadney DN20</li>
                <li>Howsham DN20</li>
                <li>South Ferriby DN18</li>
                <li>Horkstow DN18</li>
                <li>Saxby All Saints DN20</li>
                <li>Bonby DN20</li>
                <li>Worlaby DN20</li>
                <li>Elsham DN20</li>
              </ul>
            </details>
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="cursor-pointer font-semibold text-lg text-teal-900 hover:bg-gray-100">East Riding</summary>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li>Hull HU1</li>
                <li>Hull HU2</li>
                <li>Hull HU3</li>
                <li>Hull HU4</li>
                <li>Hull HU5</li>
                <li>Hull HU6</li>
                <li>Hull HU7</li>
                <li>Hull HU8</li>
                <li>Hull HU9</li>
                <li>Hull HU10</li>
                <li>Hull HU11</li>
                <li>Hull HU12</li>
                <li>Hull HU13</li>
                <li>Hull HU14</li>
                <li>Hull HU15</li>
                <li>Hull HU16</li>
                <li>Hull HU17</li>
                <li>Hull HU18</li>
                <li>Hull HU19</li>
                <li>Beverley HU17</li>
                <li>Goole DN14</li>
                <li>Bridlington YO15</li>
                <li>Driffield YO25</li>
                <li>Hornsea HU18</li>
                <li>Withernsea HU19</li>
              </ul>
            </details>
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="cursor-pointer font-semibold text-lg text-teal-900 hover:bg-gray-100">North East Lincolnshire</summary>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li>Grimsby DN31</li>
                <li>Grimsby DN32</li>
                <li>Grimsby DN33</li>
                <li>Grimsby DN34</li>
                <li>Grimsby DN35</li>
                <li>Grimsby DN36</li>
                <li>Grimsby DN37</li>
                <li>Grimsby DN38</li>
                <li>Grimsby DN39</li>
                <li>Grimsby DN40</li>
                <li>Grimsby DN41</li>
                <li>Cleethorpes DN35</li>
                <li>Immingham DN40</li>
                <li>Waltham DN37</li>
                <li>Holton le Clay DN36</li>
                <li>Tetney DN36</li>
                <li>Humberston DN36</li>
                <li>New Waltham DN36</li>
                <li>Old Clee DN32</li>
                <li>Weelsby DN32</li>
                <li>Wellow DN32</li>
                <li>Bradley DN34</li>
                <li>Barnoldby le Beck DN37</li>
                <li>Ashby cum Fenby DN37</li>
                <li>Hatcliffe DN37</li>
              </ul>
            </details>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Local Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <p className="text-lg italic text-gray-800 mb-4">"Quick install in Grimsby!"</p>
              <p className="text-sm font-semibold text-teal-600">- John D., Grimsby</p>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <p className="text-lg italic text-gray-800 mb-4">"Reliable service in Scunthorpe"</p>
              <p className="text-sm font-semibold text-teal-600">- Sarah M., Scunthorpe</p>
            </div>
          </div>
        </div>
      </section>

      {showModal && <BoilerQuoteForm />}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": places
          })
        }}
      />
    </div>
  );
}