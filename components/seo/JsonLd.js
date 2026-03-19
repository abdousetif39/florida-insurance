export default function JsonLd({ type, data }) {
  let schema = {};
  const BASE_URL = "https://www.autoinsurancecompaniesflorida.com";

  // 1. Schema خاصة بالمقالات (للحصول على شكل المقالات الإخبارية في جوجل)
  if (type === 'Article') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.description,
      "datePublished": data.date,
      "author": {
        "@type": "Organization",
        "name": "Auto Insurance Florida",
        "url": BASE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Auto Insurance Florida",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/favicon.ico`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${data.slug}`
      }
    };
  }

  // 2. Schema خاصة بصفحات المدن (للحصول على تصنيف Local Business القوي جداً)
  if (type === 'LocalBusiness') {
    schema = {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": `Cheap Auto Insurance ${data.cityName}`,
      "description": data.description,
      "url": `${BASE_URL}/${data.slug}-auto-insurance`,
      "telephone": "+1-800-555-0199", // رقم لزيادة الموثوقية (Trust Signal)
      "areaServed": {
        "@type": "City",
        "name": data.cityName,
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      "priceRange": "$$"
    };
  }

  // إرجاع الكود كسكربت مخفي يقرأه جوجل فقط
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}