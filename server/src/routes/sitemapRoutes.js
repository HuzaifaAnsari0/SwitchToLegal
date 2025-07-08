const express = require('express');
const router = express.Router();
const Service = require('../models/Service.js');

// Helper to build full URL
const BASE_URL = 'https://switchtolegal.com';

router.get('/sitemap.xml', async (req, res) => {
  try {
    // Static routes
    const staticRoutes = [
      '',
      'about',
      'contact',
      'ngo',
      'terms-and-conditions',
      'privacy-policy',
    ];

    // Dynamic service slugs
    const services = await Service.find({}, 'slug');
    const serviceRoutes = services.map(s => `service/${s.slug}`);

    // Build XML
    let urls = staticRoutes.map(route =>
      `<url><loc>${BASE_URL}/${route}</loc></url>`
    );
    urls = urls.concat(
      serviceRoutes.map(route =>
        `<url><loc>${BASE_URL}/${route}</loc></url>`
      )
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (err) {
    res.status(500).send('Error generating sitemap');
  }
});

module.exports = router; 