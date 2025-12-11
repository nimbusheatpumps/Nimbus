import Head from 'next/head';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BoilerQuoteForm from '../components/BoilerQuoteForm';
import ServiceGrid from '../components/ServiceGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { getLiveGoogleReviews, type LiveGoogleReviews } from '../lib/live-google-reviews';

const faqData = [
  {
    question: 'Why choose Nimbus for Scunthorpe?',
    answer: 'As Gas Safe Registered – 966812 engineers with over 10 years experience in North Lincolnshire, we provide reliable boiler services and heat pump installations with fixed pricing and next-day availability. Our E-E-A-T credentials include certified technicians, local expertise, and customer testimonials.',
  },
  {
    question: 'Is Worcester Bosch the best boiler?',
    answer: 'Yes – Which? #1, 94% efficiency, 12-year warranty.',
  },
];

const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "name": "Boiler Services Scunthorpe",
  "description": "Gas Safe Registered – 966812 boiler installation from £1,790, repairs £99, heat pump grants available",
  "offers": [
    { "@type": "Offer", "price": "1790", "priceCurrency": "GBP", "description": "New Boiler Install", "brand": "Worcester Bosch" },
    { "@type": "Offer", "price": "99", "priceCurrency": "GBP", "description": "Boiler Repair", "brand": "Worcester Bosch" },
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
console.log('Home component rendering with data:', data)
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
      "name": review.authorName
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
        <motion.section
          variants={itemVariants}
          className="py-16 px-4 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Your Instant Boiler Quote</h2>
            <BoilerQuoteForm />
          </div>
        </motion.section>
        <ServiceGrid />
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Worcester Bosch Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <img src="/images/worcester-bosch/greenstar-30i-front.png" alt="Greenstar 1000" className="w-full h-48 object-cover rounded-t-lg" />
                  <CardTitle>Greenstar 1000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Features:</strong> Compact design for small homes, high efficiency up to 94%, easy installation.</p>
                  <p><strong>Warranty:</strong> 5 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img src="/images/worcester/greenstar-30si-front.png" alt="Greenstar 2000" className="w-full h-48 object-cover rounded-t-lg" />
                  <CardTitle>Greenstar 2000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Features:</strong> Quiet operation, improved efficiency, smart controls for easy management.</p>
                  <p><strong>Warranty:</strong> 5 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img src="/images/worcester/greenstar-4000-front.png" alt="Greenstar 4000" className="w-full h-48 object-cover rounded-t-lg" />
                  <CardTitle>Greenstar 4000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Features:</strong> Advanced smart technology, very quiet performance, high efficiency, Wi-Fi connectivity.</p>
                  <p><strong>Warranty:</strong> 7 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img src="/images/worcester/greenstar-8000-front.png" alt="Greenstar 8000" className="w-full h-48 object-cover rounded-t-lg" />
                  <CardTitle>Greenstar 8000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Features:</strong> High power output, premium features, superior efficiency, long-lasting performance.</p>
                  <p><strong>Warranty:</strong> 10 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Worcester Bosch with Nimbus?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <img src="https://source.unsplash.com/1920x1080/?boiler,kitchen" alt="Which? Best Buy" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Which? Best Buy</h3>
                <p>Recognized for quality and reliability.</p>
              </div>
              <div className="text-center">
                <img src="https://source.unsplash.com/1920x1080/?boiler,kitchen" alt="Quiet Mark" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Quiet Mark</h3>
                <p>Certified for low noise operation.</p>
              </div>
              <div className="text-center">
                <img src="https://source.unsplash.com/1920x1080/?boiler,kitchen" alt="12-year guarantee" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">12-year guarantee</h3>
                <p>Extended warranty for peace of mind.</p>
              </div>
              <div className="text-center">
                <img src="https://source.unsplash.com/1920x1080/?boiler,kitchen" alt="MCS certified for grants" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">MCS certified for grants</h3>
                <p>Eligible for government incentives.</p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <Testimonials />
          </div>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="py-16 px-4 bg-blue-600 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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