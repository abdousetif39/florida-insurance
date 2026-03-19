import Link from 'next/link';
import { getCityBySlug, getAllCities } from '../lib/api';
import Meta from '../components/seo/Meta';
import JsonLd from '../components/seo/JsonLd';
import AffiliateCTA from '../components/AffiliateCTA';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export async function getStaticPaths() {
  const cities = getAllCities();
  return {
    paths: cities.map(slug => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const cityData = getCityBySlug(params.slug);
  const mdxSource = await serialize(cityData.content);

  return { 
    props: { cityData, mdxSource },
    revalidate: 86400 
  };
}

export default function CityPage({ cityData, mdxSource }) {
  const cityName = cityData.cityName;

  return (
    <>
      <Meta 
        title={`${cityName} Car Insurance (Save $500+)`}
        description={`Compare cheap car insurance in ${cityName}. Get instant quotes and save today.`}
        canonical={`https://www.autoinsurancecompaniesflorida.com/${cityData.slug}`}
      />

      <main className="bg-slate-50 pb-20">

        <div className="bg-blue-900 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">
            Cheap Car Insurance in {cityName}
          </h1>
        </div>

        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl">

          <MDXRemote {...mdxSource} />

          {/* CTA */}
          <div className="mt-10 text-center">
            <AffiliateCTA city={cityName} />
          </div>

          {/* Internal Linking */}
          <div className="mt-12">
            <h3 className="font-bold text-xl mb-4">Nearby Cities</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/city/miami">Miami</Link>
              <Link href="/city/orlando">Orlando</Link>
              <Link href="/city/tampa">Tampa</Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}