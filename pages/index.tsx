import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BoilerQuoteForm from '../components/BoilerQuoteForm';
import ServiceGrid from '../components/ServiceGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { getLiveGoogleReviews, type LiveGoogleReviews } from '../src/lib/live-google-reviews';

const faqData = [
  {
    question: 'Why choose Nimbus for Scunthorpe?',
    answer: 'As Gas Safe Registered – 966812 engineers with over 10 years experience in North Lincolnshire, we provide reliable boiler services and heat pump installations with fixed pricing and next-day availability. Our E-E-A-T credentials include certified technicians, local expertise, and customer testimonials.',
  },
];

const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "name": "Boiler Services Scunthorpe",
  "description": "Gas Safe Registered – 966812 boiler installation from £1,790, repairs £99, heat pump grants available",
  "offers": [
    { "@type": "Offer", "price": "1790", "priceCurrency": "GBP", "description": "New Boiler Install" },
    { "@type": "Offer", "price": "99", "priceCurrency": "GBP", "description": "Boiler Repair" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FAQAccordion({ faq }: { faq: typeof faqData }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faq.map((item, index) => (
          <details key={index} className="mb-4">
            <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
            <p className="mt-2">{item.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
          }))
        })
      }} />
    </section>
  );
}

interface HomeProps {
  data: LiveGoogleReviews;
}

export default function Home({ data }: HomeProps) {
  const localBusinessSchema = {
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
    "url": "https://nimbusheatpumps.co.uk",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.rating,
      "reviewCount": data.totalReviews
    }
  };

  const reviewSchemas = data.reviews.map(review => ({
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
    "datePublished": new Date().toISOString().split('T')[0] // Placeholder, as live data doesn't have exact date
  }));

  return (
    <>
      <Head>
        <title>New Boiler North Lincolnshire | Gas Safe Registered – 966812 £1,790 2025</title>
        <meta name="description" content="Professional boiler services in Scunthorpe and Grimsby. Gas Safe Registered – 966812 £1,790 new installs, repairs from £99, heat pump grants available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {reviewSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }} />
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Hero />
        <TrustBar />
        <motion.section variants={itemVariants} className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Your Instant Boiler Quote</h2>
            <BoilerQuoteForm />
          </div>
        </motion.section>
        <ServiceGrid />
        <motion.section variants={itemVariants} className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <Testimonials />
          </div>
        </motion.section>
        <motion.section variants={itemVariants} className="py-16 px-4 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Fixed Boiler Now?</h2>
          <p className="mb-8">Book your Gas Safe Registered – 966812 installation today - next day available.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </motion.section>
        <Footer />
      </motion.div>
      <FAQAccordion faq={faqData} />
    </>
  );
}

export async function getStaticProps() {
  let data;
  try {
    data = await getLiveGoogleReviews();
  } catch (error) {
    data = { rating: 0, totalReviews: 0, reviews: [] };
  }
  return {
    props: { data },
    revalidate: 86400, // Match the live data revalidate
  };
}