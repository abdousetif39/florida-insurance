import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../lib/api';
import Meta from '../../components/seo/Meta';
import JsonLd from '../../components/seo/JsonLd';
import AffiliateCTA from '../../components/AffiliateCTA';
import StickyBottomCTA from '../../components/StickyBottomCTA';
import BehavioralCTA from '../../components/BehavioralCTA';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

// المكونات التي يمكن استخدامها داخل ملفات الـ MDX
const components = {
  AffiliateCTA,
  img: (props) => (
    <img 
      {...props} 
      className="rounded-2xl shadow-md my-8 w-full h-auto object-cover" 
      loading="lazy" 
    />
  ),
};

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const related = getRelatedPosts(params.slug);

  // 🔥 الحقن الذكي
  

  const mdxSource = await serialize(post.content);

  let detectedCity = "Florida";
  if (params.slug.includes("miami")) detectedCity = "Miami";
  if (params.slug.includes("orlando")) detectedCity = "Orlando";
  if (params.slug.includes("tampa")) detectedCity = "Tampa";

  return { 
    props: { post, mdxSource, related, detectedCity } 
  };
}

export default function BlogPost({ post, mdxSource, related, detectedCity }) {
  return (
    <>
      <Meta 
        title={post.title} 
        description={post.description} 
        ogType="article"
        canonical={`https://www.autoinsurancecompaniesflorida.com/blog/${post.slug}`}
      />
      <JsonLd type="Article" data={post} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* عنوان المقال */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* معلومات الكاتب والتاريخ */}
        <div className="flex items-center gap-4 text-slate-500 mb-10 text-sm font-medium border-b border-slate-100 pb-6">
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
            {post.category || 'Guide'}
          </div>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        
        {/* محتوى المقال الرئيسي */}
        <article className="prose prose-lg prose-blue max-w-none text-slate-700">
          <MDXRemote {...mdxSource} components={components} />
        </article>

        {/* مقالات ذات صلة */}
        <div className="mt-20 pt-10 border-t border-slate-200">
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Recommended for You</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(r => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="block group">
                <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2">
                    {r.title}
                  </h4>
                  <span className="text-blue-600 text-sm font-bold mt-4 inline-flex items-center">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* أدوات التحويل (تظهر مرة واحدة فقط في أسفل الشاشة أو عند محاولة الخروج) */}
      <StickyBottomCTA city={detectedCity} />
      <BehavioralCTA city={detectedCity} />
    </>
  );
}