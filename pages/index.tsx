import Head from 'next/head';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BoilerQuoteForm from '../components/BoilerQuoteForm';
import ServiceGrid from '../components/ServiceGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { getLiveGoogleReviews, type LiveGoogleReviews } from '../lib/live-google-reviews';

const faqData = [
  {
    question: 'Why choose Nimbus for Scunthorpe?',
    answer: 'As Gas Safe Registered – 966812 engineers with over 10 years experience in North Lincolnshire, we provide reliable boiler services with fixed pricing and next-day availability. Our E-E-A-T credentials include certified technicians, local expertise, and customer testimonials.',
  },
  {
    question: 'Is Worcester Bosch the best boiler?',
    answer: 'Yes – Which? #1, 94% efficiency, 12-year warranty.',
  },
];

const testimonials = [
  {
    quote: "Excellent service from start to finish. The team was professional and the boiler installation was completed on time.",
    name: "John Smith"
  },
  {
    quote: "Highly recommend Nimbus for their expertise and reliability. Our new Worcester Bosch boiler is working perfectly.",
    name: "Sarah Johnson"
  },
  {
    quote: "Great communication throughout the process. Fixed our heating issues quickly and efficiently.",
    name: "Mike Brown"
  }
];

const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "name": "Boiler Services Scunthorpe",
  "description": "Gas Safe Registered – 966812 boiler installation from £1,790, repairs £99",
  "offers": [
    { "@type": "Offer", "price": "1790", "priceCurrency": "GBP", "description": "New Boiler Install", "brand": "Worcester Bosch" },
    { "@type": "Offer", "price": "99", "priceCurrency": "GBP", "description": "Boiler Repair", "brand": "Worcester Bosch" },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function FAQAccordion({ faq }: { faq: typeof faqData }) {
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true });

  return (
    <motion.div ref={faqRef} className="section py-16 px-4" variants={fadeInVariants} initial="hidden" animate={faqInView ? "visible" : "hidden"}>
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
    </motion.div>
  );
}

interface HomeProps {
  data: LiveGoogleReviews;
}

export default function Home({ data }: HomeProps) {
   const [src1000, setSrc1000] = useState('/images/worcester-bosch/WB_1000.jpg');
  const [src2000, setSrc2000] = useState('/images/worcester-bosch/Worcester_2000_Left.jpg');
  const [src4000, setSrc4000] = useState('/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png');
  const [src8000, setSrc8000] = useState('/images/worcester-bosch/8000_Style_Black.jpg');
  const [error1000, setError1000] = useState(false);
  const [error2000, setError2000] = useState(false);
  const [error4000, setError4000] = useState(false);
  const [error8000, setError8000] = useState(false);
  const [rangeErrors, setRangeErrors] = useState<Record<number, boolean>>({});
  const heroRef = useRef(null);
  const trustRef = useRef(null);
  const quoteRef = useRef(null);
  const serviceRef = useRef(null);
  const rangesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);
  const upgradeRef = useRef(null);
  const ourRangesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const fixedRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const trustInView = useInView(trustRef, { once: true });
  const quoteInView = useInView(quoteRef, { once: true });
  const serviceInView = useInView(serviceRef, { once: true });
  const rangesInView = useInView(rangesRef, { once: true });
  const whyChooseInView = useInView(whyChooseRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });
  const upgradeInView = useInView(upgradeRef, { once: true });
  const ourRangesInView = useInView(ourRangesRef, { once: true });
  const whyChooseUsInView = useInView(whyChooseUsRef, { once: true });
  const fixedInView = useInView(fixedRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const ranges = [
    {
      name: "Worcester Bosch 1000",
      src: "/images/worcester-bosch/WB_1000.jpg",
      kW: "24kW",
      price: "From £799",
      features: ["Compact design", "High efficiency", "Easy installation"]
    },
    {
      name: "Worcester Bosch 2000",
      src: "/images/worcester-bosch/Worcester_2000_Left.jpg",
      kW: "30kW",
      price: "From £899",
      features: ["Upgrade option", "Reliable performance", "Energy saving"]
    },
    {
      name: "Worcester Bosch 4000",
      src: "/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png",
      kW: "35kW",
      price: "From £999",
      features: ["Smart technology", "Long lifespan", "Advanced controls"]
    },
    {
      name: "Worcester Bosch 8000",
      src: "/images/worcester-bosch/8000_Style_Black.jpg",
      kW: "40kW",
      price: "From £1199",
      features: ["Premium range", "Superior efficiency", "Comprehensive warranty"]
    }
  ];
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
        <title>Worcester Bosch Boiler Installation Scunthorpe | Gas Safe Engineers North Lincolnshire</title>
        <meta name="description" content="Expert Worcester Bosch boiler installation in Scunthorpe and North Lincolnshire. Gas Safe registered, next-day fitting, fixed prices from £1,790. Call 01724 123456." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {reviewSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }} />
      <div>
        <motion.div ref={heroRef} variants={fadeInVariants} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
          <Hero />
        </motion.div>
        <motion.div ref={trustRef} variants={fadeInVariants} initial="hidden" animate={trustInView ? "visible" : "hidden"}>
          <TrustBar />
        </motion.div>
        <motion.div
          ref={quoteRef}
          className="section py-16 px-4 bg-gray-50"
          variants={fadeInVariants}
          initial="hidden"
          animate={quoteInView ? "visible" : "hidden"}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Your Instant Boiler Quote</h2>
            <BoilerQuoteForm />
          </div>
        </motion.div>
        <motion.div ref={serviceRef} variants={fadeInVariants} initial="hidden" animate={serviceInView ? "visible" : "hidden"}>
          <ServiceGrid />
        </motion.div>
        <motion.div
          ref={rangesRef}
          className="section py-16 px-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={rangesInView ? "visible" : "hidden"}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Worcester Bosch Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
              <CardHeader className="bg-teal-900 text-white rounded-t-xl py-2 px-4">
                {error1000 ? (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700 rounded-t-lg">Worcester Bosch 1000</div>
                ) : (
                  <Image src={src1000} onError={() => setError1000(true)} loading="lazy" width="584" height="550" alt="Worcester Bosch Greenstar 1000 boiler" className="w-full h-48 object-cover rounded-t-lg" quality={95} sizes="(max-width: 768px) 100vw, 50vw" />
                )}
                <CardTitle>Greenstar 1000</CardTitle>
              </CardHeader>
                <CardContent>
                  <p className="text-orange-500 text-2xl font-bold">From £1,790</p>
                  <p><strong>Features:</strong> Compact design for small homes, high efficiency up to 94%, easy installation.</p>
                  <p><strong>Warranty:</strong> 5 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-teal-900 text-white rounded-t-xl py-2 px-4">
                  {error2000 ? (
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700 rounded-t-lg">Worcester Bosch 2000</div>
                  ) : (
                    <Image src={src2000} onError={() => setError2000(true)} loading="lazy" width="584" height="550" alt="Worcester Bosch Greenstar 2000 boiler" className="w-full h-48 object-cover rounded-t-lg" quality={95} sizes="(max-width: 768px) 100vw, 50vw" />
                  )}
                  <CardTitle>Greenstar 2000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-500 text-2xl font-bold">From £1,790</p>
                  <p><strong>Features:</strong> Quiet operation, improved efficiency, smart controls for easy management.</p>
                  <p><strong>Warranty:</strong> 5 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-teal-900 text-white rounded-t-xl py-2 px-4">
                  {error4000 ? (
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700 rounded-t-lg">Worcester Bosch 4000</div>
                  ) : (
                    <Image src={src4000} onError={() => setError4000(true)} loading="lazy" width="584" height="550" alt="Worcester Bosch Greenstar 4000 boiler" className="w-full h-48 object-cover rounded-t-lg" quality={95} sizes="(max-width: 768px) 100vw, 50vw" />
                  )}
                  <CardTitle>Greenstar 4000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-500 text-2xl font-bold">From £1,790</p>
                  <p><strong>Features:</strong> Advanced smart technology, very quiet performance, high efficiency, Wi-Fi connectivity.</p>
                  <p><strong>Warranty:</strong> 7 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="bg-teal-900 text-white rounded-t-lg py-2 px-4">
                  {error8000 ? (
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700 rounded-t-lg">Worcester Bosch 8000</div>
                  ) : (
                    <Image src={src8000} onError={() => setError8000(true)} loading="lazy" width="584" height="550" alt="Worcester Bosch Greenstar 8000 boiler" className="w-full h-48 object-cover rounded-t-lg" quality={95} sizes="(max-width: 768px) 100vw, 50vw" />
                  )}
                  <CardTitle>Greenstar 8000</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-500 text-2xl font-bold">From £1,790</p>
                  <p><strong>Features:</strong> High power output, premium features, superior efficiency, long-lasting performance.</p>
                  <p><strong>Warranty:</strong> 10 years manufacturer's warranty.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={whyChooseRef}
          className="section py-16 px-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={whyChooseInView ? "visible" : "hidden"}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimbus for Your Gas Boiler Installation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center bg-teal-50 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <Image src="/gas-safe-badge.png" width={160} height={160} quality={95} priority alt="Gas Safe Registered 966812" className="mx-auto mb-4 w-16 h-16 object-contain" />
                <h3 className="text-xl font-semibold mb-2">Gas Safe Registered 966812</h3>
                <p>Fully qualified and registered engineers – certificate 966812</p>
              </div>
              <div className="text-center bg-teal-50 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <svg className="w-16 h-16 mx-auto mb-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Next-Day Installation Available</h3>
                <p>Monday–Saturday across North Lincolnshire</p>
              </div>
              <div className="text-center bg-teal-50 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <svg className="w-16 h-16 mx-auto mb-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Fixed Prices from £1,790</h3>
                <p>No hidden extras – includes removal, flush & commissioning</p>
              </div>
              <div className="text-center bg-teal-50 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <img src="/images/worcester-bosch/4000_Lft_10years_2500x2700_copy.png" alt="10-Year Parts & Labour Warranty" className="mx-auto mb-4 w-16 h-16 object-contain" />
                <h3 className="text-xl font-semibold mb-2">10-Year Parts & Labour Warranty</h3>
                <p>All Worcester Bosch backed warranty on all new boilers</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={testimonialsRef}
          className="bg-teal-50 py-16 rounded-xl -mx-4 md:mx-0 md:rounded-none"
          variants={fadeInVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">What Our Customers Say</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="gap-6 -ml-6">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-6">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                      <Image src="/images/worcester-bosch/Worcester_Bosch_8000_Front_1.jpg" width={64} height={64} className="w-16 h-16 object-cover rounded mb-4" alt="Worcester Bosch Boiler" quality={95} sizes="(max-width: 768px) 100vw, 50vw" onError={() => {}} />
                      <p className="text-lg italic text-gray-800 mb-4">{testimonial.quote}</p>
                      <p className="text-teal-900 font-semibold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 hover:text-yellow-500 transition" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
        <motion.div
          ref={upgradeRef}
          className="bg-teal-900 py-12 text-white text-center rounded-t-3xl -mx-4 md:mx-0 md:rounded-none"
          variants={fadeInVariants}
          initial="hidden"
          animate={upgradeInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Boiler?</h2>
          <a href="tel:01724622069" className="w-full text-2xl font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg bg-orange-600 hover:bg-orange-700 transition-all inline-block">Call Us Now</a>
        </motion.div>
        <motion.div
          ref={ourRangesRef}
          className="section py-16 px-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={ourRangesInView ? "visible" : "hidden"}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">Our Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {ranges.map((range, index) => (
                <div key={index} className="bg-white border-teal-200 rounded-xl shadow-lg hover:shadow-2xl transition-all p-6">
                  {rangeErrors[index] ? (
                    <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-700 rounded-t-lg mb-4">Worcester Bosch {range.name.split(' ')[2]}</div>
                  ) : (
                    <Image src={range.src} alt={range.name} width={400} height={300} className="h-48 w-full object-cover rounded-t-lg mb-4" quality={95} sizes="(max-width: 768px) 100vw, 50vw" onError={() => setRangeErrors(prev => ({ ...prev, [index]: true }))} />
                  )}
                  <h3 className="text-2xl font-bold text-teal-900 mb-2">{range.name}</h3>
                  <p className="text-lg text-gray-700 mb-3">{range.kW} <span className="text-orange-600">{range.price}</span></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {range.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={whyChooseUsRef}
          className="section py-16 px-4"
          variants={fadeInVariants}
          initial="hidden"
          animate={whyChooseUsInView ? "visible" : "hidden"}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-teal-50 border border-teal-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <svg className="w-12 h-12 text-teal-600 mb-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <h3 className="text-xl font-bold text-teal-900 mb-2">Which? Trusted</h3>
                <p className="text-gray-600 leading-relaxed">Awarded for customer service excellence by Which? magazine</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <svg className="w-12 h-12 text-teal-600 mb-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <h3 className="text-xl font-bold text-teal-900 mb-2">Gas Safe Registered</h3>
                <p className="text-gray-600 leading-relaxed">Fully qualified and insured engineers with Gas Safe certification</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <svg className="w-12 h-12 text-teal-600 mb-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <h3 className="text-xl font-bold text-teal-900 mb-2">Local Experts</h3>
                <p className="text-gray-600 leading-relaxed">Serving North Lincolnshire with fast response times and local knowledge</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <svg className="w-12 h-12 text-teal-600 mb-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <h3 className="text-xl font-bold text-teal-900 mb-2">10 Year Warranty</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive coverage on all boiler installations and repairs</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={fixedRef}
          className="section py-12 px-4 bg-blue-900 text-white text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate={fixedInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold mb-4">Fixed Boiler Now?</h2>
          <p className="mb-8">Book your Gas Safe Registered – 966812 installation today - next day available.</p>
          <button className="w-full bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-3xl hover:bg-orange-700 shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </motion.div>
        <Footer />
      </div>
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