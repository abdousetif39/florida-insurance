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
        title="Cheap Car Insurance in Florida (Save $500+ in 2026)"
        description="Compare cheap car insurance in Florida. Get instant quotes from top providers and save up to $500 per year."
        canonical="https://www.autoinsurancecompaniesflorida.com/"
      />

      <JsonLd type="Article" data={{
        title: "Cheap Car Insurance in Florida",
        description: "Compare and save on auto insurance",
        date: new Date().toISOString()
      }} />

      <main className="bg-slate-50 min-h-screen">

        {/* HERO */}
        <section className="bg-blue-900 text-white py-24 text-center px-4">
          <h1 className="text-5xl font-extrabold max-w-4xl mx-auto">
            Cheap Car Insurance in Florida
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Drivers in Florida save an average of $487/year by comparing quotes.
          </p>

          <div className="mt-10">
            <AffiliateCTA city="Florida" />
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="bg-white py-16 text-center border-b">
          <h2 className="text-3xl font-bold mb-8">Why Drivers Trust Us</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="font-bold text-xl">✔ Real-Time Quotes</h3>
              <p>Updated daily from top insurance providers</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">✔ 100% Free</h3>
              <p>No hidden fees or obligations</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">✔ Trusted by Thousands</h3>
              <p>Helping drivers save since 2024</p>
            </div>
          </div>
        </section>

        {/* TOP COMPANIES */}
        <section className="py-16 bg-slate-50">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Insurance Companies in Florida
          </h2>

          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Avg Price</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State Farm</td>
                  <td>$120/mo</td>
                  <td>⭐ 4.8</td>
                  <td><AffiliateCTA city="Florida" /></td>
                </tr>
                <tr>
                  <td>GEICO</td>
                  <td>$110/mo</td>
                  <td>⭐ 4.7</td>
                  <td><AffiliateCTA city="Florida" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BLOG */}
        <section className="py-20">
          <h2 className="text-3xl text-center font-bold mb-10">
            Latest Guides
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                  <h3 className="font-bold text-xl">{post.title}</h3>
                  <p className="text-sm mt-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}