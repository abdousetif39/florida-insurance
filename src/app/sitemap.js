import { floridaCities } from '../data/cities';
import { blogPosts } from '../data/blogPosts';

export default function sitemap() {
  const baseUrl = "https://www.autoinsurancecompaniesflorida.com";
  const currentDate = new Date();

  // 1. الصفحات الأساسية
  const baseRoutes = ["", "/about", "/contact", "/privacy", "/terms", "/blog"].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
  }));

  // 2. صفحات المدن
  const cityRoutes = floridaCities.map((city) => ({
    url: `${baseUrl}/${city}-auto-insurance`,
    lastModified: currentDate,
  }));

  // 3. صفحات المقالات (جديد!)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
  }));

  return [...baseRoutes, ...cityRoutes, ...blogRoutes];
}