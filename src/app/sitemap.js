import { floridaCities } from '../data/cities';

export default function sitemap() {
  const baseUrl = "https://www.autoinsurancecompaniesflorida.com";
  const currentDate = new Date();

  // 1. الصفحات الأساسية
  const baseRoutes = [
    { url: baseUrl, lastModified: currentDate },
    { url: `${baseUrl}/about`, lastModified: currentDate },
    { url: `${baseUrl}/contact`, lastModified: currentDate },
    { url: `${baseUrl}/privacy`, lastModified: currentDate },
    { url: `${baseUrl}/terms`, lastModified: currentDate },
  ];

  // 2. توليد روابط المدن تلقائياً من ملف البيانات
  const cityRoutes = floridaCities.map((city) => ({
    url: `${baseUrl}/${city}-auto-insurance`,
    lastModified: currentDate,
  }));

  // دمج القائمتين معاً وإرسالهما لجوجل
  return [...baseRoutes, ...cityRoutes];
}