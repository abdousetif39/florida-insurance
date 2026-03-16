import React from 'react';
import { Shield, Car, ChevronRight, Star, CheckCircle, Info } from 'lucide-react';
import { affiliateOffers } from '../data/offers';

// مكون مخصص لمساحات جوجل أدسنس
const AdBanner = ({ type = "banner" }) => {
  const heightClass = type === "banner" ? "h-24" : "h-64";
  return (
    <div className={`w-full ${heightClass} bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center my-8 rounded-lg relative overflow-hidden`}>
      <div className="text-gray-500 font-medium flex flex-col items-center">
        <span className="text-sm uppercase tracking-widest mb-1">Advertisement</span>
        <span>Google AdSense Space ({type})</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
     
      {/* Hero Section */}
      <section className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2070" 
            alt="Florida Highway" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 rounded-full px-4 py-1.5 mb-6 border border-blue-700">
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Florida's #1 Insurance Comparison Tool</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Lower Your Auto Insurance in <span className="text-orange-400">Florida</span> Today
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Florida drivers pay some of the highest rates in the US. Compare quotes from our top two trusted partners and save hundreds on your annual premium.
            </p>
            <a href="#compare" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-xl transform hover:-translate-y-0.5">
              Start Saving Now <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top AdSense Banner */}
        <AdBanner type="banner" />

        {/* Affiliate Offers Section (The 2 MaxBounty Offers) */}
        <section id="compare" className="py-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Top 2 Recommended Providers for Florida Residents</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We have narrowed down the best options for drivers in Miami, Orlando, Tampa, and across the Sunshine State.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {affiliateOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{offer.company}</h3>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(offer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm font-medium text-slate-600 ml-2">{offer.rating}/5 Rating</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold">
                    {offer.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-center transition shadow-md text-lg"
                >
                  Get Your Free Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Middle AdSense Box */}
        <div className="flex justify-center my-12">
          <AdBanner type="box" />
        </div>

        {/* SEO Article Section (Crucial for AdSense & Google Rankings) */}
        <section id="guides" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why is Auto Insurance So Expensive in Florida?</h2>
          <div className="prose prose-lg prose-blue max-w-none text-slate-700">
            <p>
              If you live in Florida, you probably already know that car insurance rates are significantly higher than the national average. But why? Understanding the factors behind these costs can help you make informed decisions and find the cheapest car insurance in Florida.
            </p>
            <h3>1. The No-Fault State Law (PIP)</h3>
            <p>
              Florida is a "no-fault" state. This means that all drivers are legally required to carry <strong>Personal Injury Protection (PIP)</strong> coverage. Regardless of who causes an accident, your own PIP insurance covers your medical bills up to $10,000. While this reduces lawsuits, the high rate of PIP fraud in Florida has historically driven up premiums for everyone.
            </p>
            <h3>2. High Rates of Uninsured Motorists</h3>
            <p>
              Florida consistently ranks among the states with the highest percentage of uninsured drivers. Because so many drivers lack proper coverage, insurance companies increase rates for insured drivers to offset the financial risks associated with uninsured motorist claims.
            </p>
            <h3>3. Extreme Weather and Hurricanes</h3>
            <p>
              The Sunshine State is notoriously prone to extreme weather, particularly hurricanes and tropical storms. This leads to a massive amount of comprehensive claims for flooded, damaged, or destroyed vehicles. Insurance carriers factor this high environmental risk into their pricing.
            </p>
            
            {/* In-content Native Ad / Call to Action */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-2 mt-0">Don't Overpay for Florida Coverage</h4>
              <p className="mb-4">You can combat high rates by comparing multiple quotes. Our top providers offer discounts for safe drivers, bundling, and more.</p>
              <a href="#compare" className="text-orange-600 font-bold hover:underline flex items-center">
                Compare Rates Now <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <h3>How to Find Cheap Auto Insurance in Miami, Tampa, and Orlando</h3>
            <p>
              Whether you are navigating the busy streets of Miami or commuting in Orlando, the best way to lower your premium is to <strong>shop around</strong>. Never accept your renewal quote without checking competitors. Use the comparison tools provided by our partners above to ensure you are getting the most competitive rate available in 2026.
            </p>
          </div>
        </section>

        {/* Bottom AdSense Banner */}
        <AdBanner type="banner" />

      </div>

     
    </main>
  );
}