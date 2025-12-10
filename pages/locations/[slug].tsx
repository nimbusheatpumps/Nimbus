import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { generateSEO } from '../../lib/seo';
import { reviews, aggregateRating } from '../../lib/google-reviews';

interface LocationData {
  name: string;
  title: string;
  description: string;
  content: string;
  keywords: string;
  schema: object;
}

const locations: Record<string, LocationData> = {
  scunthorpe: {
    name: 'Scunthorpe',
    title: 'Gas Boiler Scunthorpe | £1,790 2025',
    description: 'Affordable gas boiler installation in Scunthorpe from £1,790. Gas Safe registered engineers for reliable heating solutions.',
    content: 'Get your gas boiler installed in Scunthorpe for just £1,790 in 2025. Professional services with Gas Safe certification.',
    keywords: 'gas boiler Scunthorpe, boiler install Scunthorpe 2025, heating Scunthorpe',
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
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
      "url": "https://nimbusheatpumps.co.uk/locations/scunthorpe",
      "sameAs": ["https://www.facebook.com/nimbusheatpumps"]
    }
  },
  grimsby: {
    name: 'Grimsby',
    title: 'Gas Boiler Grimsby | £1,790 2025',
    description: 'Affordable gas boiler installation in Grimsby from £1,790. Gas Safe registered engineers for reliable heating solutions.',
    content: 'Get your gas boiler installed in Grimsby for just £1,790 in 2025. Professional services with Gas Safe certification.',
    keywords: 'gas boiler Grimsby, boiler install Grimsby 2025, heating Grimsby',
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
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
      "url": "https://nimbusheatpumps.co.uk/locations/grimsby",
      "sameAs": ["https://www.facebook.com/nimbusheatpumps"]
    }
  }
};

interface LocationPageProps {
  location: LocationData;
}

const LocationPage: React.FC<LocationPageProps> = ({ location }) => {
  const seoProps = generateSEO(location.title, location.description, `locations/${location.name.toLowerCase()}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Nimbus Heat Pumps",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3 Crossbeck Road",
          "addressLocality": location.name,
          "addressRegion": "North Lincolnshire",
          "postalCode": "DN16 3HR",
          "addressCountry": "GB"
        },
        "telephone": "01724 622069",
        "url": `https://nimbusheatpumps.co.uk/locations/${location.name.toLowerCase()}`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue,
          "reviewCount": aggregateRating.reviewCount
        },
        "sameAs": ["https://www.facebook.com/nimbusheatpumps"]
      }) }} />
      {reviews.map((review, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        }) }} />
      ))}
      <NextSeo {...seoProps} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(location.schema) }} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{location.title}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">{location.description}</p>
          <p className="mb-6">{location.content}</p>
          <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Gas Boiler Installation</li>
            <li>Boiler Repair and Maintenance</li>
            <li>Emergency Boiler Services</li>
            <li>Energy Efficiency Upgrades</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-medium">Emergency {location.name}?</h3>
              <p>Yes, we provide 24/7 emergency boiler services in {location.name}.</p>
            </div>
            <div>
              <h3 className="font-medium">How much does a gas boiler cost in {location.name}?</h3>
              <p>Starting from £1,790 for installation in {location.name}.</p>
            </div>
            <div>
              <h3 className="font-medium">Are you Gas Safe registered in {location.name}?</h3>
              <p>Yes, all our engineers are Gas Safe registered (966812) for your safety.</p>
            </div>
          </div>
          <div className="mb-6">
            <a href="/heat-pumps" className="text-blue-600 hover:underline">Explore Heat Pump Services</a>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex items-center">
            <Image src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png" alt="Gas Safe registered heating engineer badge" width={64} height={64} className="w-16 h-16 mr-4" />
            <p>Gas Safe Registered (966812) for E-E-A-T credibility and safety.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const experimental_ppr = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locations).map(slug => ({
    params: { slug }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const location = locations[slug];

  if (!location) {
    return { notFound: true };
  }

  return {
    props: { location }
  };
};

export default LocationPage;