import { promises as fs } from 'fs';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { reviews, aggregateRating } from '../../../lib/google-reviews';
import TrustBar from '../../../../components/TrustBar';

const towns = ['scunthorpe', 'grimsby', 'hull', 'brigg', 'barton-upon-humber', 'winterton', 'epworth', 'crowle', 'gainsborough', 'louth'];

export async function generateStaticParams() {
  return towns.map(town => ({ town }));
}

export async function generateMetadata({ params }: { params: { town: string } }) {
  const { town } = params;
  const capitalizedTown = town.replace(/\b\w/g, l => l.toUpperCase());
  const title = `Heat Pump Services in ${capitalizedTown} - Nimbus Heating`;
  const description = `Professional heat pump installation and services in ${capitalizedTown}. Get a free quote today.`;

  return {
    title,
    description,
  };
}

export default async function Page({ params }: { params: { town: string } }) {
  const { town } = params;
  const capitalizedTown = town.replace(/\b\w/g, l => l.toUpperCase());

  const reviewsData = JSON.parse(await fs.readFile(process.cwd() + '/public/google-reviews.json', 'utf8'));
  const { aggregateRating } = reviewsData;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nimbus Heating",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Crossbeck Road",
      "addressLocality": capitalizedTown,
      "addressRegion": "North Lincolnshire",
      "postalCode": "DN16 3HR",
      "addressCountry": "GB"
    },
    "telephone": "01724 622069",
    "url": `https://nimbusheatpumps.co.uk/locations/${town}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount
    },
    "sameAs": ["https://www.facebook.com/nimbusheatpumps"]
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
  };

  const faqs = [
    {
      question: `Why choose heat pumps in ${capitalizedTown}?`,
      answer: `Heat pumps offer efficient, eco-friendly heating solutions perfect for ${capitalizedTown}'s climate, reducing energy costs and carbon footprint.`
    },
    {
      question: `What types of heat pumps do you install in ${capitalizedTown}?`,
      answer: `We install air source, ground source, and hybrid heat pumps tailored to ${capitalizedTown} homes and businesses.`
    },
    {
      question: `Are heat pumps suitable for ${capitalizedTown}'s weather?`,
      answer: `Yes, modern heat pumps perform excellently in ${capitalizedTown}'s temperate climate, providing reliable heating and cooling.`
    },
    {
      question: `How much do heat pump installations cost in ${capitalizedTown}?`,
      answer: `Costs vary, but we offer competitive pricing with free quotes for ${capitalizedTown} residents. Contact us for a personalized estimate.`
    },
    {
      question: `Do you provide maintenance for heat pumps in ${capitalizedTown}?`,
      answer: `Yes, we offer comprehensive maintenance services to keep your heat pump running efficiently in ${capitalizedTown}.`
    },
    {
      question: `Can I get government grants for heat pumps in ${capitalizedTown}?`,
      answer: `Eligible ${capitalizedTown} homeowners can access grants like the Boiler Upgrade Scheme for heat pump installations.`
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Locations', href: '/locations' },
        { label: capitalizedTown }
      ]} />
      <TrustBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Heat Pump Installation in {capitalizedTown}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">Professional heat pump installation and services in {capitalizedTown}. Get a free quote today.</p>
          <div className="mb-6">
            <p>{aggregateRating.reviewCount} verified Google reviews · {aggregateRating.ratingValue}/5 ★★★★★</p>
            <a href="https://g.page/r/yk7F28G9VpVstANKx/review" className="text-blue-600 hover:underline">Leave a review</a>
          </div>
          <div className="mb-6 flex items-center">
            <img src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png" alt="Gas Safe Logo" className="w-16 h-16 mr-4" />
            <span>Gas Safe Registered: 966812</span>
          </div>
          <div className="mb-6">
            <iframe
              src={`https://maps.google.com/maps?q=${town},North Lincolnshire&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-medium">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}