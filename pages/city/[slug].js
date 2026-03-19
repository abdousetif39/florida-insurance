import React from 'react';
import { getAllCities, getCityBySlug } from '../../lib/cities';
import { 
  CheckCircle, AlertTriangle, HelpCircle, ShieldCheck, 
  TrendingDown, MapPin, Car, Award, Info, Star, ChevronRight, Clock, ThumbsUp, ThumbsDown 
} from 'lucide-react';
export async function getStaticPaths() {
  const cities = getAllCities();

  return {
    paths: cities.map(c => ({
      params: { slug: c.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const city = getCityBySlug(params.slug);

  return {
    props: { city },
    revalidate: 86400
  };
}

// ============================================================================
// 📁 SIMULATED 'pages/city/[slug].jsx' (CLIENT FRONTEND)
// ============================================================================

const Head = ({ children }) => <div style={{ display: 'none' }} aria-hidden="true">{children}</div>;

const AffiliateCTA = ({ label }) => (
  <a
    href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=29198&c=918277&a=790327&k=2475FC62D5DAB90ECA12D1AFBA3D443C&l=33019"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-black py-4 px-10 rounded-full shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl inline-block text-center"
  >
    {label}
  </a>
);

const StickyBottomCTA = ({ savingAmount }) => (
  <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-50 flex justify-center">
    <a
  href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=29198&c=918277&a=790327&k=2475FC62D5DAB90ECA12D1AFBA3D443C&l=33019"
  target="_blank"
  className="bg-green-500 hover:bg-green-600 text-white text-lg font-black py-4 px-8 rounded-full w-full max-w-md shadow-lg transition-colors flex items-center justify-center"
>
  <Car className="mr-2" size={20} />
  🔥 Compare Quotes in 60 Seconds & Save {savingAmount}
</a>
  </div>
);

const FAQSection = ({ city }) => (
  <section className="mt-16">
    <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
      <HelpCircle className="mr-3 text-blue-500" size={28} />
      Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      {city?.faqs?.map((faq, i) => (
        <div key={i} className="bg-slate-50 hover:bg-slate-100 transition-colors p-6 rounded-3xl border border-slate-200 cursor-pointer group">
          <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start">
            <span className="text-blue-500 mr-3 mt-1 group-hover:text-blue-600 transition-colors">Q.</span>
            {faq.q}
          </h4>
          <p className="text-slate-600 font-medium ml-7 leading-relaxed">{faq.a}</p>
        </div>
      ))}
    </div>
  </section>
);

// MAIN PAGE COMPONENT

  export default function App({ city }) { 
  const baseUrl = 'https://yourdomain.com';

  const sectionOrder = [
    { id: 'whyHigh', label: `Why Car Insurance is Expensive in ${city.cityName}` },
    { id: 'howToSave', label: `How to Save on Car Insurance in ${city.cityName}` },
    { id: 'comparison', label: `Best Car Insurance Companies in ${city.cityName}` },
    { id: 'deepDive', label: `${city.cityName} Insurance Market Deep Dive` }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24 relative selection:bg-blue-100 selection:text-blue-900">
      
      <Head>
        <title>{city.title}</title>
        <link rel="canonical" href={`${baseUrl}/${city.slug}`} />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": city?.breadcrumbs?.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": `${baseUrl}/${crumb.slug}`
      }))
    })
  }}
/>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `Car Insurance in ${city.cityName}, Florida`,
            "description": city.description,
            "brand": {
              "@type": "Brand",
              "name": "Insurance Comparison FL"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": city.trust.rating,
              "reviewCount": city.trust.reviews
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": city.lowPrice,
              "highPrice": city.highPrice,
              "offerCount": city.topCompanies.length
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": city.trust.rating
                },
                "author": {
                  "@type": "Person",
                  "name": "Verified User"
                }
              }
            ]
          })
        }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": city.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }} />
      </Head>

      <nav className="max-w-4xl mx-auto px-4 pt-8 pb-2 flex items-center text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">
        {city?.breadcrumbs?.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <a href={`#${crumb.slug}`} className="hover:text-blue-600 transition-colors">
              {crumb.name}
            </a>
            {idx < city.breadcrumbs.length - 1 && <ChevronRight size={14} className="mx-2 text-slate-300" />}
          </React.Fragment>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-20 mt-4">
        
        <section className="text-center mb-16 py-12 px-6 bg-gradient-to-b from-blue-50/80 to-transparent rounded-[3.5rem] border border-blue-50/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 opacity-20"></div>
          <div className="flex flex-col items-center justify-center space-y-3 mb-8">
             <span className="flex items-center bg-white px-4 py-1.5 rounded-full shadow-sm text-[11px] font-black text-slate-500 uppercase tracking-widest border border-slate-100">
                <Clock size={12} className="mr-2 text-blue-500" /> March 2026 Live Update
             </span>
             <div className="bg-green-100/50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter">
                Average {city.cityName} Rate: <strong>{city.avgPrice}</strong>
             </div>
             
             <p className="text-[11px] text-red-600 font-bold mt-1 bg-red-50/80 px-4 py-1 rounded-full border border-red-100/50">
               {city.cityName} drivers overpay by ~{city.savingAmount} on average
             </p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-4 text-slate-900 leading-[1.1] tracking-tight">
            Cheap Car Insurance <br className="hidden md:block" /> <span className="text-blue-600 italic">in {city.cityName}, Florida (2026)</span>
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="ml-2 text-sm font-bold text-slate-700">
              {city.trust.rating} ({city.trust.reviews} reviews)
            </span>
          </div>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-medium italic">
            "{city.introHook}"
          </p>
          
          <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
             <AffiliateCTA city={city.cityName} label={city.cta.primary} />
             
             <p className="text-[10px] text-slate-400 mt-2.5 font-semibold">
               ✔ No spam • ✔ 100% free • ✔ Takes 60 seconds
             </p>

             <p className="text-xs text-slate-500 mt-3 font-medium bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
               Join 12,000+ Florida drivers who switched this month
             </p>
             
             <p className="text-[11px] text-orange-600 font-bold mt-4 animate-pulse">
               🔥 Rates updated 2 hours ago — lock in before they increase
             </p>
             
             <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-100 shadow-sm">
               <ShieldCheck size={14} />
               Verified & Updated March 2026 • Official Data Source
             </div>
          </div>
        </section>

        <section className="mb-20">
           <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">2026 Best Providers in {city.cityName}</h2>
              <div className="hidden md:block bg-slate-100 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase">
                 Source: {city.dataSource}
              </div>
           </div>
           <div className="overflow-x-auto overflow-y-hidden border border-slate-100 rounded-[2.5rem] shadow-2xl bg-white">
              <table className="w-full min-w-[600px] text-left border-collapse">
                 <thead className="bg-slate-900 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                    <tr>
                       <th className="p-6 whitespace-nowrap">Provider</th>
                       <th className="p-6 whitespace-nowrap">Trust Rating</th>
                       <th className="p-6 text-center whitespace-nowrap">Benefit</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 font-bold">
                    {city.topCompanies.map((comp, i) => (
                      <tr key={i} className="group hover:bg-blue-50/50 transition-all cursor-default">
                         <td className="p-6 text-slate-900 text-lg flex items-center">
                            {comp}
                            {i === 0 && (
                              <a
  href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=29198&c=918277&a=790327&k=2475FC62D5DAB90ECA12D1AFBA3D443C&l=33019"
  target="_blank"
  className="ml-4 text-[11px] uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full shadow-md font-black"
>
  View Rates
</a>
                            )}
                         </td>
                         <td className="p-6">
                            <div className="flex items-center text-yellow-500">
                               <Star size={14} fill="currentColor" className="mr-1" />
                               <span className="text-slate-800">{(parseFloat(city.trust.rating) - (i * 0.2)).toFixed(1)}</span>
                            </div>
                         </td>
                         <td className="p-6 text-center">
                            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-[10px] rounded-full uppercase tracking-tighter whitespace-nowrap">
                               {i === 0 ? "Lowest Premium" : i === 1 ? "Top Claims Support" : "Best Local Service"}
                            </span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-20 px-2 md:px-0">
          {sectionOrder.map((section) => (
            <section key={section.id}>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                {section.label}
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                {city.sections[section.id]}
              </p>
              
              {section.id === 'howToSave' && (
                <div className="my-12 text-center not-prose">
                  <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-3xl shadow-lg">
                    <div className="bg-white rounded-[1.35rem] p-8 md:px-16 flex flex-col items-center">
                      <h4 className="text-2xl font-black text-slate-900 mb-6">Want these savings?</h4>
                      <AffiliateCTA city={city.cityName} label="🔥 Compare Quotes from 20+ Insurers" />
                      <p className="text-[10px] text-slate-400 mt-3 font-semibold mb-2">
                        ✔ No spam • ✔ 100% free • ✔ Takes 60 seconds
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Join 12,000+ Florida drivers who switched this month
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {section.id === 'comparison' && (
                <div className="not-prose mt-10 grid md:grid-cols-2 gap-6">
                   <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                      <h4 className="flex items-center text-green-700 font-black mb-4 uppercase text-sm tracking-widest">
                         <ThumbsUp size={18} className="mr-2" /> Pros of {city.cityName} Market
                      </h4>
                      <ul className="space-y-3 text-sm font-semibold text-slate-600">
                         <li className="flex items-start"><CheckCircle size={16} className="mr-3 mt-0.5 text-green-500 shrink-0" /> High provider competition lowers rates</li>
                         <li className="flex items-start"><CheckCircle size={16} className="mr-3 mt-0.5 text-green-500 shrink-0" /> Multiple bundling options available</li>
                      </ul>
                   </div>
                   <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100">
                      <h4 className="flex items-center text-red-700 font-black mb-4 uppercase text-sm tracking-widest">
                         <ThumbsDown size={18} className="mr-2" /> Market Challenges
                      </h4>
                      <ul className="space-y-3 text-sm font-semibold text-slate-600">
                         <li className="flex items-start"><AlertTriangle size={16} className="mr-3 mt-0.5 text-red-400 shrink-0" /> Traffic congestion increases liability risk</li>
                         <li className="flex items-start"><AlertTriangle size={16} className="mr-3 mt-0.5 text-red-400 shrink-0" /> High regional uninsured motorist rates</li>
                      </ul>
                   </div>
                </div>
              )}
            </section>
          ))}
        </div>

        <FAQSection city={city} />

        <section className="mt-24 p-8 md:p-12 bg-slate-900 rounded-[3.5rem] text-white">
           <h3 className="text-2xl font-black mb-8 flex items-center">
              <TrendingDown size={24} className="mr-3 text-blue-400" /> People Also Compare in {city.regionName}
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {city?.internalLinks?.map((link, i) => (
                <a key={i} href={`#${link.slug}`} className="bg-white/10 p-5 rounded-2xl text-xs font-black hover:bg-white/20 transition-all flex items-center justify-between border border-white/5 group">
                   <span className="leading-relaxed text-[11px]">Best cheap car insurance in {link.anchor}, FL</span>
                   <ChevronRight size={14} className="text-blue-400 transform group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </a>
              ))}
           </div>
        </section>
        
        {/* Hidden Crawl Link for Top-Level Hierarchy SEO */}
        <a href="/florida" className="hidden" aria-hidden="true">Florida Insurance Hub</a>
      </main>

      <StickyBottomCTA savingAmount={city.savingAmount} />
    </div>
  );
}