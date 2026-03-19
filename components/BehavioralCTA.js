import { useState, useEffect } from 'react';
import { X, ShieldAlert } from 'lucide-react';

export default function BehavioralCTA({ city = "Florida" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    const timeTimer = setTimeout(() => {
      triggerPopup();
    }, 15000);

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        triggerPopup();
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY < 0) {
        triggerPopup();
      }
    };

    const triggerPopup = () => {
      setIsVisible(true);
      setHasTriggered(true);
      sessionStorage.setItem('popupShown', 'true');
    };

    if (sessionStorage.getItem('popupShown')) {
      setHasTriggered(true);
      clearTimeout(timeTimer);
    } else {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform scale-100 animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full p-1 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <ShieldAlert className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Wait! Before you leave...</h3>
          <p className="text-slate-600 mb-6">
            Drivers in <strong>{city}</strong> are saving an average of $500/year. Don't renew your policy without checking the latest 2026 rates.
          </p>
          
          <a 
            href="https://afflat3c2.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=31202&c=918277&a=790327&k=B7A7682872F318AEFCB7CF473FC792A5&l=36289"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105"
            onClick={() => setIsVisible(false)}
          >
            See My {city} Savings →
          </a>
          <button 
            onClick={() => setIsVisible(false)}
            className="mt-4 text-sm text-slate-400 hover:text-slate-600 font-medium underline"
          >
            No thanks, I like paying full price
          </button>
        </div>
      </div>
    </div>
  );
}