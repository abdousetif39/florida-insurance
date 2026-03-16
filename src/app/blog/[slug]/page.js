import { blogPosts } from "../../../data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft, ArrowRight, ShieldCheck } from "lucide-react";

// دالة لتوليد المسارات الثابتة (للسرعة والسيو)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// دالة الـ Metadata مع تحسين الـ Canonical URL
export async function generateMetadata({ params }) {
  const { slug } = await params; // ضرورية في نسخ Next.js الحديثة
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.autoinsurancecompaniesflorida.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  // تقسيم المحتوى إلى فقرات بناءً على الأسطر الجديدة
  const paragraphs = post.content.split("\n");

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* زر العودة */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 mb-8 hover:underline font-medium">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Insurance Guides
        </Link>

        <article className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* معلومات المقال */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">
              {post.title}
            </h1>

            {/* محتوى المقال مع تقسيم الفقرات وإعلان داخلي */}
            <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <div key={index}>
                  {/* عرض الفقرة */}
                  <p className="mb-6">{paragraph}</p>
                  
                  {/* إضافة إعلان أدسنس بعد الفقرة الثانية */}
                  {index === 1 && (
                    <div className="my-10 p-4 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center h-48">
                      <span className="text-xs uppercase tracking-widest text-slate-400 mb-2">Advertisement</span>
                      <div className="text-slate-500 font-bold text-center">
                        <p>Google AdSense</p>
                        <p className="text-sm font-normal">(In-Article Native Ad Slot)</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* صندوق الثقة والتحويل (CTA) */}
            <div className="mt-16 p-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl text-center text-white shadow-xl">
              <ShieldCheck className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Compare & Save on Florida Auto Insurance</h3>
              <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                Join thousands of Florida residents who found cheaper rates using our independent comparison tools.
              </p>
              <Link href="/" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}