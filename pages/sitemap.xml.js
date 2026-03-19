import { getAllPosts, getAllCities } from '../lib/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

function generateSiteMap(posts, cities) {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <!-- Static Pages -->
    <url>
      <loc>${BASE_URL}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    <url>
      <loc>${BASE_URL}/blog</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>

    <url>
      <loc>${BASE_URL}/about</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>

    <!-- Blog Posts -->
    ${posts.map(({ slug, date }) => `
      <url>
        <loc>${BASE_URL}/blog/${slug}</loc>
        <lastmod>${date || currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `).join('')}

    <!-- City Pages (🔥 الأهم) -->
    ${cities.map((citySlug, i) => `
      <url>
        <loc>${BASE_URL}/city/${citySlug}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${i < 10 ? '0.9' : '0.8'}</priority>
      </url>
    `).join('')}

  </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const cities = getAllCities();

  const sitemap = generateSiteMap(posts, cities);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 🔥 caching مهم

  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}