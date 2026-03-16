export default function sitemap() {
  const baseUrl = "https://www.autoinsurancecompaniesflorida.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
    },
  ];
}