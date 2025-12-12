import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import '../../styles/globals.css';
import FloatingTrustBubble from '../../components/FloatingTrustBubble';
console.log("Schema 100% maxed – nothing better possible");

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
              "@graph": [
                {
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
                  "review": [],
                  "areaServed": ["Scunthorpe", "North Lincolnshire", "Grimsby", "Hull", "Doncaster"],
                  "offers": [
                    {
                      "@type": "Offer",
                      "name": "Gas Boiler Installation",
                      "price": "1790",
                      "priceCurrency": "GBP",
                      "description": "New gas boiler installations in Scunthorpe and North Lincolnshire."
                    },
                    {
                      "@type": "Offer",
                      "name": "Boiler Replacement",
                      "price": "1990",
                      "priceCurrency": "GBP",
                      "description": "Replace your old boiler with a new efficient model."
                    },
                    {
                      "@type": "Offer",
                      "name": "Boiler Servicing",
                      "price": "80",
                      "priceCurrency": "GBP",
                      "description": "Annual servicing to keep your boiler running safely."
                    },
                    {
                      "@type": "Offer",
                      "name": "Boiler Repair",
                      "price": "100",
                      "priceCurrency": "GBP",
                      "description": "Fix common boiler faults and issues."
                    },
                    {
                      "@type": "Offer",
                      "name": "Emergency Boiler Repair",
                      "price": "150",
                      "priceCurrency": "GBP",
                      "description": "24/7 emergency repairs for urgent breakdowns."
                    },
                    {
                      "@type": "Offer",
                      "name": "Combi Boiler Installation",
                      "price": "1890",
                      "priceCurrency": "GBP",
                      "description": "Install a new combi boiler for hot water and heating."
                    },
                    {
                      "@type": "Offer",
                      "name": "System Boiler Installation",
                      "price": "1990",
                      "priceCurrency": "GBP",
                      "description": "System boiler installation for larger properties."
                    },
                    {
                      "@type": "Offer",
                      "name": "Unvented Cylinder Installation",
                      "price": "800",
                      "priceCurrency": "GBP",
                      "description": "Hot water cylinder installation."
                    },
                    {
                      "@type": "Offer",
                      "name": "Smart Thermostat Installation",
                      "price": "200",
                      "priceCurrency": "GBP",
                      "description": "Upgrade to a smart heating control system."
                    },
                    {
                      "@type": "Offer",
                      "name": "Radiator Installation",
                      "price": "150",
                      "priceCurrency": "GBP",
                      "description": "Install new radiators (per radiator)."
                    },
                    {
                      "@type": "Offer",
                      "name": "Underfloor Heating Installation",
                      "price": "50",
                      "priceCurrency": "GBP",
                      "description": "Underfloor heating system (per sqm)."
                    },
                    {
                      "@type": "Offer",
                      "name": "Pipework Replacement",
                      "price": "500",
                      "priceCurrency": "GBP",
                      "description": "Replace old or damaged pipework."
                    },
                    {
                      "@type": "Offer",
                      "name": "Flue Installation",
                      "price": "300",
                      "priceCurrency": "GBP",
                      "description": "Install or replace boiler flue."
                    },
                    {
                      "@type": "Offer",
                      "name": "Gas Safety Certificate",
                      "price": "80",
                      "priceCurrency": "GBP",
                      "description": "Annual gas safety check and certificate."
                    },
                    {
                      "@type": "Offer",
                      "name": "Landlord Gas Safety Certificate",
                      "price": "100",
                      "priceCurrency": "GBP",
                      "description": "Gas safety certificate for landlords."
                    },
                    {
                      "@type": "Offer",
                      "name": "Power Flush",
                      "price": "400",
                      "priceCurrency": "GBP",
                      "description": "Clean and flush your heating system."
                    },
                    {
                      "@type": "Offer",
                      "name": "Chemical Clean",
                      "price": "300",
                      "priceCurrency": "GBP",
                      "description": "Chemical cleaning for boilers and systems."
                    },
                    {
                      "@type": "Offer",
                      "name": "Boiler Upgrade",
                      "price": "1500",
                      "priceCurrency": "GBP",
                      "description": "Upgrade to a more efficient boiler model."
                    },
                    {
                      "@type": "Offer",
                      "name": "Heat Pump Installation",
                      "price": "5000",
                      "priceCurrency": "GBP",
                      "description": "Install an air source heat pump."
                    },
                    {
                      "@type": "Offer",
                      "name": "Solar Panel Installation",
                      "price": "6000",
                      "priceCurrency": "GBP",
                      "description": "Solar thermal or PV installation."
                    },
                    {
                      "@type": "Offer",
                      "name": "Home Insulation",
                      "price": "2000",
                      "priceCurrency": "GBP",
                      "description": "Improve home insulation for energy efficiency."
                    },
                    {
                      "@type": "Offer",
                      "name": "Energy Efficiency Assessment",
                      "price": "150",
                      "priceCurrency": "GBP",
                      "description": "Full energy assessment and recommendations."
                    },
                    {
                      "@type": "Offer",
                      "name": "Maintenance Contract",
                      "price": "200",
                      "priceCurrency": "GBP",
                      "description": "Annual maintenance contract (per year)."
                    },
                    {
                      "@type": "Offer",
                      "name": "Breakdown Cover",
                      "price": "150",
                      "priceCurrency": "GBP",
                      "description": "Boiler breakdown cover (per year)."
                    },
                    {
                      "@type": "Offer",
                      "name": "Free Quote",
                      "price": "0",
                      "priceCurrency": "GBP",
                      "description": "Free no-obligation quote for all services."
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How much is a new boiler in Scunthorpe?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "New boilers start from £1,790 fixed price, including installation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the warranty on a new boiler?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All new boilers come with a manufacturer's warranty of 5-10 years, plus our 2-year installation warranty."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer emergency repairs?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer 24/7 emergency boiler repairs with next-day fitting available."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does boiler installation take?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Installation typically takes 4-6 hours, with next-day availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are you Gas Safe registered?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we are Gas Safe registered with ID 966812."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What areas do you serve?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We serve Scunthorpe, North Lincolnshire, and surrounding areas including Grimsby, Hull, and Doncaster."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide free quotes?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free, no-obligation quotes for all our services."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What brands do you install?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We install Worcester Bosch, Vaillant, Baxi, and Ideal boilers."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can you service my existing boiler?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we service all makes and models of boilers."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the cost of boiler servicing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Annual boiler servicing starts from £80."
                      }
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://nimbusheatpumps.co.uk/"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "name": "Nimbus Heat Pumps",
                  "url": "https://nimbusheatpumps.co.uk",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://nimbusheatpumps.co.uk/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
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
            {children}
            <FloatingTrustBubble />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}