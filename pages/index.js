import Link from 'next/link';
import Meta from '../components/seo/Meta';
import JsonLd from '../components/seo/JsonLd';
import AffiliateCTA from '../components/AffiliateCTA';
import { getAllPosts } from '../lib/api';

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 6);

  return {
    props: { posts },
    revalidate: 86400,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Meta 
        title="Cheapest Car Insurance in Florida (Save $600+ in 2026)"
        description="Florida drivers are overpaying. Compare cheap car insurance in Florida, get live quotes from top providers, and instantly save up to $600 today."
        canonical="https://www.autoinsurancecompaniesflorida.com/"
      />

      <JsonLd type="WebPage" data={{
        title: "Cheap Car Insurance in Florida",
        description: "Compare and save on auto insurance in Florida.",
        date: new Date().toISOString()
      }} />

      <main className="bg-slate-50 min-h-screen">

        {/* 🔥 HERO SECTION */}
        <section className="bg-blue-900 text-white py-20 md:py-28 text-center px-4 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Find the Cheapest Car Insurance in Florida <br className="hidden md:block" />
              <span className="text-yellow-400">(Save $600+ in 2 Minutes)</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Florida drivers are overpaying by hundreds every year. Compare live quotes from top companies and instantly find your lowest rate.
            </p>

            <div className="mt-10 max-w-md mx-auto">
              <AffiliateCTA city="Florida" />
              <p className="mt-4 text-sm text-blue-200 font-medium tracking-wide drop-shadow-md">
                ✔ No credit check • No obligation • Instant results
              </p>
            </div>
          </div>
        </section>

        {/* 🔥 URGENCY BAR */}
        <section className="bg-yellow-100 border-y border-yellow-200 py-4 text-center px-4 shadow-inner">
          <p className="text-base md:text-lg font-bold text-yellow-900">
            ⚠️ Florida rates change weekly — the cheapest option today may be gone tomorrow. Compare now!
          </p>
        </section>

        {/* 🔥 REAL SAVINGS EXAMPLE */}
        <section className="py-16 md:py-20 bg-white text-center px-4 border-b border-slate-100">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-900">Real Driver, Real Savings</h2>
          <div className="max-w-3xl mx-auto bg-green-50 border-2 border-green-100 p-8 md:p-10 rounded-3xl shadow-sm">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              A 32-year-old Florida driver was paying <span className="line-through text-red-500 font-bold">$210/month</span>. After comparing quotes side-by-side, they switched to a new provider for just <span className="text-green-700 font-extrabold text-3xl mx-2">$118/month</span>.
            </p>
            <p className="mt-6 font-black text-green-800 text-xl md:text-2xl">
              That is over $1,100 kept in their pocket every single year!
            </p>
          </div>
        </section>

        {/* 🔥 TOP CHEAPEST COMPANIES */}
        <section className="py-20 bg-slate-50 px-4 border-b border-slate-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Cheapest Car Insurance Companies in Florida (2026)
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              Based on our latest 2026 market data, these carriers consistently offer the lowest average rates for Florida residents:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-black text-2xl text-blue-900 mb-3">GEICO</h3>
                <p className="text-slate-700 font-medium">🏆 <strong className="text-blue-700">Best For:</strong> The absolute cheapest minimum coverage policies.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-black text-2xl text-red-900 mb-3">State Farm</h3>
                <p className="text-slate-700 font-medium">🏆 <strong className="text-red-700">Best For:</strong> Massive multi-line bundling discounts (Home + Auto).</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-black text-2xl text-slate-900 mb-3">Progressive</h3>
                <p className="text-slate-700 font-medium">🏆 <strong className="text-slate-800">Best For:</strong> High-risk drivers or those with prior accidents.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 COMPARISON SHORTCUT (Catching the fence-sitters) */}
        <section className="py-16 bg-white text-center px-4 border-b border-slate-200">
          <h2 className="text-3xl font-extrabold mb-6 text-slate-900">
            Compare the Cheapest Companies Side-by-Side
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            See exactly which company is cheapest for your profile in under 2 minutes. Don't leave money on the table.
          </p>
          <div className="max-w-md mx-auto">
            <AffiliateCTA city="Florida" />
          </div>
        </section>

        {/* 🔥 MICRO FAQ (SEO Boost) */}
        <section className="py-20 bg-slate-50 text-center px-4 border-b border-slate-200">
          <h2 className="text-3xl font-extrabold mb-10 text-slate-900">
            Florida Auto Insurance FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Who has the cheapest car insurance in Florida?</h3>
              <p className="text-slate-700 leading-relaxed">GEICO and State Farm are usually the cheapest for most drivers, but your exact rate depends on your zip code, vehicle, and driving record.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-xl text-slate-900 mb-2">How much is car insurance in Florida per month?</h3>
              <p className="text-slate-700 leading-relaxed">Most drivers pay between $150 and $250/month for full coverage, but state-minimum coverage can be as low as $40 to $90/month.</p>
            </div>
          </div>
        </section>

        {/* BLOG / INTERNAL LINKING SILO */}
        <section className="py-20 bg-white px-4">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-12 text-slate-900">
            Latest Florida Insurance Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 mb-4 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {post.description}
                  </p>
                  <span className="text-blue-600 font-extrabold mt-6 inline-block tracking-wide">Read Guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}