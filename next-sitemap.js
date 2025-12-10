/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nimbusheatpumps.co.uk',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.5,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/private'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priorities for key pages
    const priorities = {
      '/': 1.0,
      '/contact': 0.9,
      '/locations': 0.8,
    };

    // Check if path starts with /locations for higher priority
    if (path.startsWith('/locations')) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    // Check for /boilers/locations specifically
    if (path === '/boilers/locations') {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    // Add any additional paths if needed
    return result;
  },
};