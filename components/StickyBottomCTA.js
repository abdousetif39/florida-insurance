"use client";

import { useState, useEffect } from "react";
import { ChevronRight, X } from "lucide-react";

export default function StickyBottomCTA({ city = "Florida" }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // إخفاء الزر في أعلى الصفحة ليظهر فقط عند التمرير للأسفل
      if (window.scrollY < 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-3 md:hidden">
      <div className="flex items-center justify-between gap-3">

        <div className="text-sm">
          <p className="font-bold text-slate-900">
            Save on {city} Insurance
          </p>
          <p className="text-xs text-slate-500">
            Compare rates instantly
          </p>
        </div>

        <a
          href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=31202&c=918277&a=790327&k=B7A7682872F318AEFCB7CF473FC792A5&l=36289"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold flex items-center text-sm"
        >
          Get Quote
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>

        <button onClick={() => setVisible(false)} className="p-1">
          <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
        </button>

      </div>
    </div>
  );
}