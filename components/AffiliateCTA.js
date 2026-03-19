import { ChevronRight } from 'lucide-react';

export default function AffiliateCTA({ city = "Florida" }) {
  // هذا هو رابط MaxBounty الخاص بك الذي تم تمريره مسبقاً
  const affiliateLink = "https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=31202&c=918277&a=790327&k=B7A7682872F318AEFCB7CF473FC792A5&l=36289";
  
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white my-10 shadow-xl">
      <h3 className="text-2xl font-bold mb-3">Stop Overpaying in {city}</h3>
      <p className="mb-6 text-orange-100">Compare top-rated providers instantly and save up to $500/year.</p>
      <a 
        href={affiliateLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition transform hover:scale-105"
      >
        Get Your Free Quote <ChevronRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
}