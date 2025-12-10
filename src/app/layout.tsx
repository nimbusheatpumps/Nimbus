import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import '../../styles/globals.css';
import FloatingTrustBubble from '../../components/FloatingTrustBubble';

export const metadata = {
  title: 'Gas Boiler Installation North Lincolnshire | £1,790 Fixed Price 2025 | Nimbus',
  description: 'Gas Safe Registered – 966812 boiler installation in Scunthorpe, Grimsby, Doncaster, Lincoln. £7,500 grant eligible heat pumps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MotionConfig reducedMotion="user">
            <DefaultSeo
              title="Gas Boiler Installation North Lincolnshire | £1,790 Fixed Price 2025 | Nimbus"
              description="Gas Safe registered boiler installation in Scunthorpe, Grimsby, Doncaster, Lincoln. £7,500 grant eligible heat pumps."
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