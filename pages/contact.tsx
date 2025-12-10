import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { reviews, aggregateRating } from '../lib/google-reviews';
import { generateSEO } from '../lib/seo';

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ boilerType: '', name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setShowModal(true);
  };

  const seoProps = generateSEO(
    'Contact Us for Boiler Installation Scunthorpe 2025 - Nimbus Heat Pumps',
    'Get a quote for boiler installation in Scunthorpe 2025. Choose your boiler type and contact us for professional heating services. GBP pricing, expert installation.',
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
      <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {reviewSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {reviewSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>
  "name": "Nimbus Heat Pumps",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Crossbeck Road",
    "addressLocality": "Scunthorpe",
    "addressRegion": "North Lincolnshire",
    "postalCode": "DN16 3HR",
    "addressCountry": "GB"
  },
  "telephone": "01724 622069",
  "url": "https://nimbusheatpumps.co.uk",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": aggregateRating.ratingValue,
    "reviewCount": aggregateRating.reviewCount
  }
};

const reviewSchemas = reviews.map(review => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author_name
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": 5
  },
  "reviewBody": review.text,
  "datePublished": new Date(review.time * 1000).toISOString().split('T')[0]
}));
    'contact'
  );

  return (
    <>
      <NextSeo {...seoProps} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us for Boiler Installation</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Phone:</strong> 01724 622069</p>
              <p><strong>Email:</strong> info@nimbusheatpumps.co.uk</p>
              <p><strong>Address:</strong> 3 Crossbeck Road, Scunthorpe, North Lincolnshire, DN16 3HR, GB</p>
              <p>Serving Scunthorpe and surrounding areas with expert heating solutions.</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.123456789012!2d-0.654321!3d53.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878c1234567890%3A0xabcdef123456!2sScunthorpe%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Scunthorpe Location Map"
              ></iframe>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Get Your Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <div>
                    <label htmlFor="boilerType" className="block text-sm font-medium">Boiler Type</label>
                    <select
                      id="boilerType"
                      name="boilerType"
                      value={formData.boilerType}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select Boiler Type</option>
                      <option value="gas">Gas Boiler</option>
                      <option value="electric">Electric Boiler</option>
                      <option value="oil">Oil Boiler</option>
                      <option value="heat-pump">Heat Pump</option>
                    </select>
                    <Button type="button" onClick={nextStep} className="mt-4">Next</Button>
                  </div>
                )}
                {step === 2 && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button type="button" onClick={prevStep}>Previous</Button>
                      <Button type="submit">Send Message</Button>
                    </div>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Success!</h2>
              <p>Your message has been sent. We'll get back to you soon.</p>
              <Button onClick={() => setShowModal(false)} className="mt-4">Close</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactPage;