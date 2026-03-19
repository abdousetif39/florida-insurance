import React from 'react'; 
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '../../lib/api';
import AffiliateCTA from '../../components/AffiliateCTA';

export async function getStaticProps() {
  // 👈 4) التعديل: جلب 12 مقال كحد أقصى لحماية الأداء (Performance)
  const posts = getAllPosts().slice(0, 12);
  return { props: { posts } };
}

export default function BlogPage({ posts }) {
  // 👈 1) التعديل: استخدام Spread Operator [...] لمنع الـ Mutation Bug
  const sortedPosts = [...posts].sort((a, b) => {
    const highIntent = ['Savings', 'Comparison', 'Local'];
    const aIntent = highIntent.includes(a.category) ? 1 : 0;
    const bIntent = highIntent.includes(b.category) ? 1 : 0;
    return bIntent - aIntent;
  });

  return (
    <>
      <Head>
        <title>Cheap Car Insurance Florida (2026) – Compare & Save $600</title>
        <meta name="description" content="Compare cheap car insurance in Florida and discover how drivers save up to $600 per year. Read our expert guides and reviews." />
      </Head>

      <main className="bg-slate-50 min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          <section className="text-center mb-8 bg-white p-10 md:p-16 rounded-3xl border border-slate-200 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Florida Car Insurance Guides & <span className="text-blue-600">Cheapest Rates</span> (2026)
            </h1>
            
            {/* 👈 5) التعديل: السلاح السري للـ SEO (Hidden Keyword Injection) */}
            <h2 className="sr-only">
              Compare Cheap Car Insurance in Florida by City, Company, and Coverage Type
            </h2>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Compare cheap car insurance in Florida and discover the exact strategies local drivers use to save up to $600 per year.
            </p>
            <div className="max-w-md mx-auto">
              <AffiliateCTA city="Florida" />
              <p className="text-sm text-slate-500 mt-4 font-bold tracking-wide">
                ✔ 100% Free • ✔ No Obligation • ✔ Instant Quotes
              </p>
            </div>
          </section>

          <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 text-center py-4 px-6 rounded-2xl mb-16 font-bold shadow-sm max-w-4xl mx-auto text-sm md:text-base">
            ⚠️ Florida rates updated this week — the cheapest provider today may not be tomorrow. Compare your rates now!
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sortedPosts.map((post, index) => (
              <React.Fragment key={post.slug}>
                
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all group">
                  <div className="p-8 flex flex-col flex-grow relative">
                    <span className="text-blue-600 bg-blue-50 self-start px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                      {post.category || "Guide"}
                    </span>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed font-medium">{post.description}</p>
                    
                    <div className="border-t border-slate-100 pt-4 mb-4 mt-auto">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        Updated 2026 • Florida-specific data
                      </p>
                    </div>

                    {/* 👈 3) التعديل: Soft CTA يزرع فكرة التوفير قبل الزر */}
                    <p className="text-xs text-green-600 font-bold mb-3">
                      💡 Most drivers save $400+
                    </p>

                    {/* 👈 2) التعديل: Micro Copy Hack لربط القراءة بالمال */}
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 font-extrabold text-lg inline-flex items-center group-hover:translate-x-2 transition-transform">
                      Read Guide & Save <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </article>

                {index === 2 && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-blue-50 border-2 border-blue-200 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-sm my-4">
                    <div className="text-center md:text-left mb-8 md:mb-0 md:pr-8">
                      <h3 className="text-2xl md:text-3xl font-black text-blue-900 mb-3">Stop Reading. Start Saving!</h3>
                      <p className="text-blue-800 text-lg font-medium">Find out exactly who has the cheapest rate for your zip code right now.</p>
                    </div>
                    <div className="w-full md:w-auto min-w-[300px]">
                      <AffiliateCTA city="Florida" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <section className="mt-24 text-center bg-blue-900 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to Save on Your Florida Auto Insurance?
              </h2>
              <p className="mb-10 text-blue-100 text-lg font-medium leading-relaxed">
                Stop letting insurance companies overcharge you. Compare the top Florida providers and lock in your exact rate in under 2 minutes.
              </p>
              <div className="max-w-md mx-auto">
                <AffiliateCTA city="Florida" />
              </div>
              <p className="mt-6 text-sm text-blue-300 font-bold tracking-widest uppercase">
                Secure & Confidential
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}