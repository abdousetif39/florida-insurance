import { getAllCities, getCityData } from '../../lib/api';
import AffiliateCTA from '../../components/AffiliateCTA';
import Meta from '../../components/seo/Meta';
import StickyBottomCTA from '../../components/StickyBottomCTA';

export async function getStaticPaths() {
  const cities = getAllCities();
  const paths = cities.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const city = getCityData(params.slug);
  return { props: { city } };
}

export default function CityPage({ city }) {
  return (
    <>
      <Meta title={city.title} description={city.description} />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
          Best Cheap Car Insurance in {city.cityName}, FL
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Looking for affordable auto insurance in <strong>{city.cityName}</strong>? Drivers in Florida pay some of the highest rates in the nation, but residents of {city.cityName} can still find significant savings by comparing local quotes today.
        </p>

        <AffiliateCTA city={city.cityName} />

        <div className="prose prose-lg max-w-none text-slate-700 mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Why Rates are High in {city.cityName}</h2>
          <p>
            Several factors influence your premium in {city.cityName}, including local traffic congestion, the percentage of uninsured motorists in your area, and typical weather patterns in Florida. 
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">How to Save in {city.cityName}</h2>
          <ul className="list-disc pl-5 space-y-3 mt-4">
            <li><strong>Compare Multiple Quotes:</strong> Rates can vary by hundreds of dollars between carriers for the same coverage in {city.cityName}.</li>
            <li><strong>Bundle Your Policies:</strong> Combining home and auto insurance is the fastest way to get a 15-20% discount.</li>
            <li><strong>Ask About Local Discounts:</strong> Many insurers offer discounts for safe drivers, students, and certain professions in {city.cityName}.</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Save on {city.cityName} Insurance Now</h3>
          <p className="mb-8 text-blue-800">Get your instant quote and see how much you can save in minutes.</p>
          <AffiliateCTA city={city.cityName} />
        </div>
      </main>

      <StickyBottomCTA city={city.cityName} />
    </>
  );
}