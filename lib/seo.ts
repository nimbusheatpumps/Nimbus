import { NextSeoProps } from 'next-seo';

export const generateSEO = (title: string, description: string, slug?: string): NextSeoProps => ({
  title,
  description,
  canonical: `https://nimbusheatpumps.co.uk${slug ? `/${slug}` : ''}`,
  openGraph: {
    title,
    description,
    url: `https://nimbusheatpumps.co.uk${slug ? `/${slug}` : ''}`,
    site_name: 'Nimbus Heat Pumps',
    locale: 'en_GB',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Bryan Whiteley, Gas Safe Registered – 966812 engineer with 15+ years experience in North Lincolnshire heating systems.',
    },
    {
      name: 'keywords',
      content: 'gas boiler installation Scunthorpe, heat pump grants North Lincolnshire, boiler repair Grimsby',
    },
  ],
});

export const authorBio = {
  name: 'Bryan Whiteley',
  credentials: 'Gas Safe Registered – 966812',
  experience: '15+ years in North Lincolnshire heating systems',
  expertise: 'Boiler installations, heat pump grants, energy efficiency',
};