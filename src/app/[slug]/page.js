import { floridaCities } from "../../data/cities";
import { affiliateOffers } from "../../data/offers";
import { ChevronRight, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const dynamic = "force-static";

// دالة لتكبير الحروف الأولى من اسم المدينة
function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 1. توليد المسارات الثابتة وقت البناء (للـ SEO والسرعة)
export async function generateStaticParams() {
  return floridaCities.map((city) => ({
    slug: `${city}-auto-insurance`,
  }));
}

// 2. إعداد الـ Metadata الديناميكية للـ SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug.endsWith('-auto-insurance')) {
    return { title: 'Page Not Found' };
  }

  const rawCity = slug.replace('-auto-insurance', '');
  const cityName = toTitleCase(rawCity);
  const url = `https://www.autoinsurancecompaniesflorida.com/${slug}`;

  return {
    title: `Cheap Auto Insurance in ${cityName}, FL (2026 Quotes)`,
    description: `Compare the best and cheapest auto insurance quotes in ${cityName}, Florida. Find local coverage options and save money today.`,
    alternates: {
      canonical: url,
    },
  };
}

// 3. بناء صفحة المدينة
export default async function CityAutoInsurancePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // حماية المسار: إذا لم يكن ينتهي بـ auto-insurance نعطي صفحة 404
  if (!slug.endsWith('-auto-insurance')) {
    notFound();
  }

  const rawCity = slug.replace('-auto-insurance', '');
  
  // حماية إضافية: التأكد من أن المدينة موجودة في قاعدة البيانات
  if (!floridaCities.includes(rawCity)) {
    notFound();
  }

  const cityName = toTitleCase(rawCity);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 text-blue-200">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold tracking-wider uppercase text-sm">Local Florida Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cheap Auto Insurance in {cityName}, FL
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Compare quotes from top providers in {cityName} and save up to $500/year on your car insurance.
          </p>
          <a 
            href={affiliateOffers[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center transition-all transform hover:scale-105 shadow-lg"
          >
            Compare Quotes in {cityName} <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {/* Content Section */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-lg prose-blue max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Navigating Car Insurance in {cityName}</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Finding affordable car insurance in <strong>{cityName}</strong> doesn't have to be complicated. As a Florida driver, you are required to carry Personal Injury Protection (PIP) and Property Damage Liability (PDL), but relying on minimum coverage alone can leave you financially vulnerable.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Rates Fluctuate in {cityName}</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Your ZIP code plays a massive role in your premium. Insurers look at the number of claims, traffic density, and even the frequency of severe weather events specific to the {cityName} area. High rates of uninsured motorists in the region can also drive up costs for responsible drivers.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Get the Cheapest Rates in {cityName}</h3>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
            <li><strong>Shop Around:</strong> Never auto-renew. Compare quotes from providers every 6 months.</li>
            <li><strong>Bundle Policies:</strong> Combine your auto insurance with renters or homeowners insurance.</li>
            <li><strong>Ask for Discounts:</strong> Inquire about safe driver, good student, or military discounts.</li>
            <li><strong>Secure Your Vehicle:</strong> Installing anti-theft devices can lower your comprehensive coverage costs.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8 mb-12">
            <h4 className="text-xl font-bold text-slate-900 mb-2 mt-0">Ready to save?</h4>
            <p className="mb-0 text-slate-700">Use our free comparison tool to see how much you can cut from your {cityName} auto insurance bill today.</p>
          </div>

          {/* 🔥 نظام الروابط الداخلية الجديد (Internal Links) لتقوية الـ SEO */}
          <h3 className="text-2xl font-bold text-slate-900 border-t border-slate-200 pt-8 mb-6">
            Compare Rates in Other Florida Cities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose">
            {floridaCities
              .filter(c => c !== rawCity) // استبعاد المدينة الحالية
              .slice(0, 9) // عرض 9 مدن أخرى بشكل عشوائي أو متسلسل
              .map((city) => {
              const formattedCityName = toTitleCase(city);
              return (
                <Link 
                  key={city} 
                  href={`/${city}-auto-insurance`}
                  className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg p-3 text-center text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
                >
                  {formattedCityName}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}