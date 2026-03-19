import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../lib/api';
import Meta from '../../components/seo/Meta';
import JsonLd from '../../components/seo/JsonLd';
import AffiliateCTA from '../../components/AffiliateCTA';
import StickyBottomCTA from '../../components/StickyBottomCTA';
import BehavioralCTA from '../../components/BehavioralCTA';
import CitySearchDropdown from '../../components/CitySearchDropdown';
import Link from 'next/link';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

// 🔥 دالة تتبع الأفيليت (Google Analytics + Session + Traffic Source)
const trackAffiliateClick = (label) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("clicked_affiliate", "true");
    
    // التقاط مصدر الزيارة بدقة
    const source = document.referrer || "direct";

    if (window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'Affiliate',
        event_label: label,
        traffic_source: source,
        value: 1, 
      });
    } else {
      console.log(`[Affiliate Tracked] Clicked: ${label} | Source: ${source}`);
    }
  }
};

// 🔥 مكون جدول المحتويات (ديناميكي، دقيق، و Debounced)
const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // 👈 التحديث: دقة أعلى في اختيار العناوين لمنع التقاط عناوين الـ CTA
    const elements = Array.from(document.querySelectorAll("article > h2, article > h3"));
    
    const headingData = elements.map((elem, i) => {
      const id = elem.id || `${elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${i}`;
      elem.id = id;
      return { id, text: elem.innerText, level: elem.nodeName };
    });
    setHeadings(headingData);

    let timeout;
    // 👈 التحديث: استخدام Debounce لمنع الـ Lag أثناء الـ Scroll السريع
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            setActiveId(entry.target.id);
          }, 100); // تأخير 100 ملي ثانية لأداء فائق النعومة
        }
      });
    }, { rootMargin: "0px 0px -80% 0px" });

    elements.forEach(elem => observer.observe(elem));
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 not-prose shadow-sm">
      <h4 className="text-xl font-extrabold text-slate-900 mb-4">Table of Contents</h4>
      <ul className="space-y-3">
        {headings.map((h, i) => (
          <li key={i} className={h.level === 'H3' ? 'ml-6 text-sm' : 'font-bold'}>
            <a 
              href={`#${h.id}`} 
              className={`transition-colors duration-200 ${
                activeId === h.id ? 'text-blue-700 underline decoration-2 underline-offset-4' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-slate-200">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Related Cities</span>
        <div className="flex flex-wrap gap-2 mt-2">
          <a href="/city/miami" className="text-sm text-blue-600 hover:underline">Miami</a>
          <a href="/city/orlando" className="text-sm text-blue-600 hover:underline">Orlando</a>
          <a href="/city/tampa" className="text-sm text-blue-600 hover:underline">Tampa</a>
        </div>
      </div>
    </div>
  );
};

// 🔥 خريطة المكونات الشاملة (مع CLS = 0)
const components = {
  AffiliateCTA,
  CitySearchDropdown,
  TableOfContents,

  // 👈 التحديث: Placeholder Blur لمنع الاهتزاز أثناء التحميل
  img: (props) => (
    <Image 
      src={props.src} 
      alt={props.alt || "Auto Insurance Florida"} 
      width={800} 
      height={450}
      sizes="(max-width: 768px) 100vw, 800px" 
      className="rounded-2xl shadow-md my-8 w-full object-cover" 
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88P8/AwswBwGAQABwAAAAAElFTkSuQmCC" 
    />
  ),

  HeroImage: (props) => (
    <Image 
      src={props.src} 
      alt={props.alt || "Main Florida Insurance Image"} 
      width={800} 
      height={450}
      sizes="(max-width: 768px) 100vw, 800px" 
      className="rounded-3xl shadow-lg my-6 w-full object-cover border border-slate-100" 
      priority={true}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88P8/AwswBwGAQABwAAAAAElFTkSuQmCC"
    />
  ),

  PromoBox: ({ title, subtitle, link, btnText }) => (
    <div className="my-10 p-8 bg-green-50 border-2 border-green-100 rounded-3xl text-center shadow-sm not-prose">
      <h3 className="text-2xl font-bold text-green-900 mb-2 m-0">{title}</h3>
      <p className="text-green-700 mb-6 mt-2">{subtitle}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="nofollow sponsored noopener"
        onClick={() => trackAffiliateClick(`PromoBox: ${title}`)}
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 no-underline"
      >
        {btnText}
      </a>
    </div>
  ),

  FAQBox: ({ question, children }) => (
    <details className="mb-4 cursor-pointer bg-slate-50 p-5 rounded-2xl border border-slate-100 not-prose group">
      <summary className="font-bold text-lg text-slate-900 outline-none">{question}</summary>
      <div className="mt-3 text-slate-700 leading-relaxed">
        {children}
      </div>
    </details>
  ),

  BigFooter: ({ title, subtitle, link, btnText }) => (
    <div className="mt-12 mb-8 overflow-hidden rounded-3xl bg-blue-900 text-white shadow-2xl not-prose">
      <div className="px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white m-0">{title}</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto mt-2">{subtitle}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="nofollow sponsored noopener"
          onClick={() => trackAffiliateClick(`BigFooter: ${title}`)}
          className="inline-block w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black text-xl py-5 px-14 rounded-full shadow-lg transition-all no-underline"
        >
          {btnText}
        </a>
        <p className="mt-4 text-sm text-blue-300 m-0">100% Free • Secure • No Obligations</p>
      </div>
    </div>
  )
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

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  const cityMap = {
    miami: "Miami",
    orlando: "Orlando",
    tampa: "Tampa",
    jacksonville: "Jacksonville",
    tallahassee: "Tallahassee",
    hialeah: "Hialeah"
  };

  let detectedCity = "Florida";
  
  Object.keys(cityMap).forEach(citySlug => {
    if (params.slug.includes(citySlug)) {
      detectedCity = cityMap[citySlug];
    }
  });

  return { 
    props: { post, mdxSource, related, detectedCity } 
  };
}

export default function BlogPost({ post, mdxSource, related, detectedCity }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://afflat3c1.com" />
      </Head>
      
      <Meta 
        title={post.title} 
        description={post.description} 
        ogType="article"
        canonical={`https://www.autoinsurancecompaniesflorida.com/blog/${post.slug}`}
      />
      <JsonLd type="Article" data={post} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-slate-500 mb-10 text-sm font-medium border-b border-slate-100 pb-6">
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
            {post.category || 'Guide'}
          </div>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        
        <article className="prose prose-lg prose-blue max-w-none text-slate-700">
          <MDXRemote {...mdxSource} components={components} lazy />
        </article>

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

      <StickyBottomCTA city={detectedCity} />
      <BehavioralCTA city={detectedCity} scrollThreshold={40} timeThreshold={15000} />
    </>
  );
}