import { floridaCities } from "@/data/cities";
import { affiliateOffers } from "@/data/offers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return floridaCities.map((city) => ({ city }));
}

export default function CityPage({ params }) {
  const { city } = params;

  if (!floridaCities.includes(city)) notFound();

  const formattedCity = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">

      {/* HERO */}
      <h1 className="text-4xl font-extrabold mb-6">
        Cheap Auto Insurance in {formattedCity}, Florida
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Compare quotes from top providers in {formattedCity} and save up to $500/year.
      </p>

      {/* 🔥 CTA TOP */}
      <div className="mb-8">
        <a
          href={affiliateOffers[0].link}
          target="_blank"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold inline-block"
        >
          Compare Quotes in {formattedCity}
        </a>
      </div>

      {/* SEO CONTENT */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Average Car Insurance Cost in {formattedCity}
      </h2>

      <p className="mb-6">
        The average cost of car insurance in {formattedCity}, Florida ranges between $120 and $250 per month depending on your driving record, vehicle type, and coverage level.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Minimum Car Insurance Requirements in Florida
      </h2>

      <p className="mb-6">
        Florida law requires drivers to carry at least $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL).
      </p>

      {/* 🔥 OFFERS */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {affiliateOffers.map((offer) => (
          <a
            key={offer.id}
            href={offer.link}
            target="_blank"
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border"
          >
            <h3 className="text-xl font-bold mb-2">{offer.company}</h3>
            <p className="text-blue-600 font-bold mb-2">{offer.price}</p>

            <ul className="text-sm text-gray-600 mb-4">
              {offer.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded">
              Get Quote →
            </span>
          </a>
        ))}
      </div>

      {/* WHY EXPENSIVE */}
      <h2 className="text-2xl font-bold mb-4">
        Why Car Insurance is Expensive in {formattedCity}
      </h2>

      <p className="mb-6">
        Drivers in {formattedCity} face higher premiums due to traffic congestion, uninsured drivers, and Florida’s no-fault insurance laws.
      </p>

      {/* 🔥 CTA MIDDLE (بدل AdSense) */}
      <div className="my-10 text-center">
        <p className="mb-4 font-semibold">
          Don't overpay for car insurance in {formattedCity}
        </p>

        <a
          href={affiliateOffers[1].link}
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block"
        >
          Get Free Quote Now
        </a>
      </div>

      {/* TIPS */}
      <h2 className="text-2xl font-bold mb-4">
        Tips to Save Money in {formattedCity}
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Compare quotes regularly</li>
        <li>Bundle insurance policies</li>
        <li>Maintain a clean driving record</li>
        <li>Increase your deductible</li>
      </ul>

      {/* 🔥 CTA FINAL */}
      <div className="mt-16 p-8 bg-blue-900 text-white rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Save on Car Insurance?
        </h3>

        <p className="mb-6">
          Compare quotes from top providers in {formattedCity} and start saving today.
        </p>

        <a
          href={affiliateOffers[0].link}
          target="_blank"
          className="bg-orange-500 px-8 py-4 rounded-lg font-bold inline-block"
        >
          Compare Quotes →
        </a>
      </div>

      {/* INTERNAL LINKS (SEO مهم جداً) */}
      <h2 className="text-2xl font-bold mt-16 mb-4">
        Other Florida Cities
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {floridaCities.slice(0, 6).map((c) => (
          <a
            key={c}
            href={`/${c}-auto-insurance`}
            className="text-blue-600 hover:underline"
          >
            {c.replace("-", " ")} Auto Insurance
          </a>
        ))}
      </div>

    </main>
  );
}