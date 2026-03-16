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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Florida Car Insurance Guides</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Expert advice to help you navigate Florida laws and lower your premiums.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </main>
  );
}