import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import '../../styles/globals.css';
import FloatingTrustBubble from '../../components/FloatingTrustBubble';
console.log("Full JSON-LD added – Google will love this");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nimbus Boilers & Heat Pumps",
              "image": "https://nimbusheatpumps.co.uk/wp-content/uploads/2025/06/iStock-2211126281-scaled.jpg",
              "telephone": "01724 622069",
              "email": "info@nimbusheatpumps.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 Crossbeck Road",
                "addressLocality": "Scunthorpe",
                "addressRegion": "North Lincolnshire",
                "postalCode": "DN16 3HR",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.5594,
                "longitude": -0.6352
              },
              "url": "https://nimbusheatpumps.co.uk",
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
              "priceRange": "££",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "7"
              },
              "review": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is a new boiler in Scunthorpe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of a new boiler in Scunthorpe varies depending on the model and installation requirements. Typically, prices range from £800 to £1,500 for the boiler unit, plus installation costs. We offer free quotes and can help you claim the £7,500 Boiler Upgrade Scheme grant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you Gas Safe registered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are fully Gas Safe registered installers. All our engineers are qualified and certified to work on gas appliances, ensuring your safety and compliance with regulations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Boiler Upgrade Scheme?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Boiler Upgrade Scheme offers a £7,500 grant towards the cost of a new, efficient boiler. It's available to homeowners in England and Wales who meet the eligibility criteria. We can help you apply and claim the grant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you install air source heat pumps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in air source heat pump installations. Our team is MCS accredited and can provide efficient, renewable heating solutions for your home."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does boiler installation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard boiler installation typically takes 4-6 hours, but this can vary depending on the complexity of the job. We aim to complete most installations in a single day to minimize disruption."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve Scunthorpe, North Lincolnshire, North East Lincolnshire, Lincolnshire, South Yorkshire, and surrounding areas including Grimsby, Doncaster, Lincoln, and many towns and villages in the region."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MotionConfig reducedMotion="user">
            <DefaultSeo
              title="Gas Boiler Installation North Lincolnshire | £1,790 Fixed Price 2025 | Nimbus"
              description="Gas Safe Registered – 966812 boiler installation in Scunthorpe, Grimsby, Doncaster, Lincoln. £7,500 grant eligible heat pumps."
              openGraph={{
                type: 'website',
                locale: 'en_GB',
                site_name: 'Nimbus Heat Pumps',
              }}
              additionalMetaTags={[
                {
                  name: 'author',
                  content: 'Bryan Whiteley, Gas Safe Registered – 966812 engineer with 15+ years experience in North Lincolnshire heating systems.',
                },
              ]}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
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
                  "email": "info@nimbusheatpumps.co.uk",
                  "url": "https://nimbusheatpumps.co.uk"
                })
              }}
            />
            {children}
            <FloatingTrustBubble />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}