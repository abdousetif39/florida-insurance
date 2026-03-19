import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function CitySearchDropdown() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🚀 يمكنك استبدال هذه القائمة بملف الـ JSON الذي يحتوي على 100 مدينة
  const floridaCities = [
    { name: "Miami", slug: "miami" },
    { name: "Orlando", slug: "orlando" },
    { name: "Tampa", slug: "tampa" },
    { name: "Jacksonville", slug: "jacksonville" },
    { name: "Tallahassee", slug: "tallahassee" },
    { name: "Fort Lauderdale", slug: "fort-lauderdale" },
    { name: "Hialeah", slug: "hialeah" },
    { name: "St. Petersburg", slug: "st-petersburg" },
    { name: "Port St. Lucie", slug: "port-st-lucie" },
    { name: "Cape Coral", slug: "cape-coral" },
    { name: "Naples", slug: "naples" },
    { name: "Gainesville", slug: "gainesville" }
  ];

  // فلترة المدن بناءً على ما يكتبه المستخدم
  const filteredCities = floridaCities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // إغلاق القائمة عند الضغط في أي مكان خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // دالة الانتقال لصفحة المدينة
  const handleSelectCity = (slug) => {
    setIsOpen(false);
    setSearchTerm('');
    router.push(`/city/${slug}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-8" ref={dropdownRef}>
      <label className="block text-slate-700 font-bold mb-2">
        Find Local Rates in Your City:
      </label>
      
      {/* مربع البحث */}
      <div className="relative">
        <input
          type="text"
          className="w-full px-5 py-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-700 placeholder-slate-400 bg-white shadow-sm"
          placeholder="Type your city (e.g., Orlando)..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
        />
        {/* أيقونة البحث */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* القائمة المنسدلة (تظهر فقط عند الكتابة أو الضغط) */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl max-h-60 overflow-y-auto">
          {filteredCities.length > 0 ? (
            <ul className="py-2">
              {filteredCities.map((city) => (
                <li 
                  key={city.slug}
                  onClick={() => handleSelectCity(city.slug)}
                  className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 cursor-pointer text-slate-600 font-medium transition-colors border-b border-slate-50 last:border-0"
                >
                  {city.name}, FL
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-4 text-slate-500 text-center">
              No cities found. Try another search.
            </div>
          )}
        </div>
      )}
    </div>
  );
}