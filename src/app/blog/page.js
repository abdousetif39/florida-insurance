import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";
import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Florida Car Insurance Guides & News",
  description: "Expert guides on Florida auto insurance laws, savings tips, and local coverage options.",
};

export default function BlogPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* عنوان الصفحة */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Florida Car Insurance Guides</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Expert advice to help you navigate Florida laws and lower your premiums.</p>
        </div>

        {/* شبكة المقالات الـ 20 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all">
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">{post.category}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-bold inline-flex items-center hover:translate-x-1 transition-transform">
                  Read Full Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* صندوق عروض الأفيليت (MaxBounty) الجديد */}
        <div className="mt-12 p-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to see your real savings?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Our comparison tool helps Florida drivers save an average of $500 per year. Compare quotes in 2 minutes.
          </p>
          <a 
            href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=31202&c=918277&a=790327&k=B7A7682872F318AEFCB7CF473FC792A5&l=36289" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg transform hover:scale-105 active:scale-95"
          >
            Compare Quotes Now
          </a>
        </div>

      </div>
    </main>
  );
}