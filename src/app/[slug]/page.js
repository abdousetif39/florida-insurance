import { floridaCities } from "../../data/cities";
import { affiliateOffers } from "../../data/offers";
import { Star, CheckCircle, ChevronRight, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';

export const dynamic = "force-static";

// دالة لتكبير الحروف الأولى من اسم المدينة
function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 1. توليد المسارات الثابتة وقت البناء
export async function generateStaticParams() {
  return floridaCities.map((city) => ({
    slug: `${city}-auto-insurance`,
  }));
}

// 2. إعداد الـ Metadata للـ SEO (تم تحديثها لتتوافق مع Next.js 15+)
export async function generateMetadata({ params }) {
  // فك الـ Promise هنا باستخدام await
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // حماية: إذا كان الرابط لا يحتوي على auto-insurance، نتوقف
  if (!slug.endsWith('-auto-insurance')) {
    return { title: 'Page Not Found' };
  }

  // استخراج اسم المدينة
  const rawCity = slug.replace('-auto-insurance', '');
  const cityName = toTitleCase(rawCity);
  const url = `https://www.autoinsurancecompaniesflorida.com/${slug}`;

  return {
    title: `Cheap Auto Insurance in ${cityName}, FL | Compare & Save`,
    description: `Compare the best and cheapest auto insurance quotes in ${cityName}, Florida. Find affordable coverage, understand local rates, and save money today.`,
    keywords: `auto insurance ${cityName}, cheap car insurance ${cityName} fl, ${cityName} car insurance quotes`,
    alternates: {
      canonical: url,
    },
  };
}

// مكون الإعلانات
const AdBanner = ({ type = "banner" }) => {
  const heightClass = type === "banner" ? "h-24" : "h-64";
  return (
    <div className={`w-full ${heightClass} bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center my-8 rounded-lg relative overflow-hidden`}>
      <div className="text-gray-500 font-medium flex flex-col items-center">
        <span className="text-sm uppercase tracking-widest mb-1">Advertisement</span>
        <span>Google AdSense Space</span>
      </div>
    </div>
  );
};

// 3. محتوى الصفحة (تم تحديثها لتتوافق مع Next.js 15+)
export default async function CityInsurance({ params }) {
  // فك الـ Promise هنا باستخدام await
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // حماية قوية: إذا زار شخص رابطاً عشوائياً، نعطيه صفحة 404
  if (!slug.endsWith('-auto-insurance')) {
    notFound();
  }

  // استخراج اسم المدينة النظيف
  const rawCity = slug.replace('-auto-insurance', '');
  
  // التأكد من أن المدينة موجودة في قاعدة بياناتنا
  if (!floridaCities.includes(rawCity)) {
    notFound();
  }

  const cityName = toTitleCase(rawCity);

  // إعداد Schema للـ SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Auto Insurance Comparison in ${cityName}`,
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Auto Insurance Florida",
      "url": "https://www.autoinsurancecompaniesflorida.com"
    }
  };

  return (
    <main className="bg-slate-50 text-slate-800 font-sans pb-16">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-800 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
            <MapPin className="h-4 w-4 text-orange-400" />
            <span>Local Florida Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cheap Auto Insurance in <span className="text-orange-400">{cityName}</span>, Florida
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Drivers in {cityName} face unique traffic and weather challenges. Compare our top-rated partners below to secure the best local rates.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <AdBanner type="banner" />

        <section className="py-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Top Rated Insurers for {cityName} Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliateOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{offer.company}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(offer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-bold text-sm">
                    {offer.price}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>

                <a href={offer.link} target="_blank" rel="noopener noreferrer" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-center transition">
                  Get {cityName} Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        <AdBanner type="box" />

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mt-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Navigating Car Insurance in {cityName}</h2>
          <div className="prose prose-lg prose-blue max-w-none text-slate-700">
            <p>
              Finding affordable car insurance in <strong>{cityName}, Florida</strong> requires understanding the local landscape. Because Florida is a no-fault state, every driver in {cityName} must carry at least $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL).
            </p>
            
            <h3>Why Rates Fluctuate in {cityName}</h3>
            <p>
              Your ZIP code plays a massive role in your premium. Insurers look at the number of claims, traffic density, and even the frequency of severe weather events specific to the {cityName} area. High rates of uninsured motorists in the region can also drive up costs for responsible drivers.
            </p>

            <h3>How to Get the Cheapest Rates in {cityName}</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Shop Around:</strong> Never auto-renew. Compare quotes from the providers listed above every 6 months.</li>
              <li><strong>Bundle Policies:</strong> Combine your auto insurance with renters or homeowners insurance.</li>
              <li><strong>Ask for Discounts:</strong> Inquire about safe driver, good student, or military discounts if applicable.</li>
              <li><strong>Secure Your Vehicle:</strong> Installing anti-theft devices can lower your comprehensive coverage costs.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8">
              <h4 className="text-lg font-bold text-slate-900 mb-2 mt-0">Ready to save?</h4>
              <p className="mb-0 text-sm">Scroll up to use our free comparison tool and see how much you can cut from your {cityName} auto insurance bill today.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}