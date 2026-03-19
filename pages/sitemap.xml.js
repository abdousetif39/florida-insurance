import { getAllPosts, getAllCities } from '../lib/api';

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_SITE_URL;

function generateSiteMap(posts, cities) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>

     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/blog/${slug}</loc>
       </url>
     `;
       })
       .join('')}

     ${cities
       .map((citySlug) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/city/${citySlug}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const cities = getAllCities();

  const sitemap = generateSiteMap(posts, cities);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;