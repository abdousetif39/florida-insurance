import './globals.css';
import Link from 'next/link';
import { Car, Info } from 'lucide-react';
import { floridaCities } from '../data/cities';

export const metadata = {
  title: {
    default: "Auto Insurance Florida",
    template: "%s | Auto Insurance Florida",
  },
  description: "Compare cheap auto insurance quotes in Florida. Find the best providers, understand PIP laws, and save money today.",
  // الطريقة الصحيحة لإضافة كود جوجل في Next.js
  verification: {
    google: "awZjbIaxmDMOArrAMSOTR6jpgYPSt4T9yowypanJ4qM",
  },
  keywords: 'auto insurance florida, cheap car insurance miami, florida car insurance quotes',
  // لضمان ظهور الأيقونة بشكل سليم
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased flex flex-col min-h-screen">
        
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center">
                <Car className="h-8 w-8 text-blue-600 mr-2" />
                <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-900">
                  AutoInsurance<span className="text-blue-600">Florida</span>
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition border-b-2 border-transparent hover:border-blue-600 pb-1">Home</Link>
                
                {/* رابط المدونة */}
                <Link href="/blog" className="text-blue-600 font-bold hover:text-blue-700 transition border-b-2 border-blue-600 pb-1">Blog</Link>
                
                <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About Us</Link>
                <Link href="/contact" className="text-white bg-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="md:col-span-1 mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <Car className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="font-bold text-xl text-white">AutoInsurance<span className="text-blue-500">Florida</span></span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Helping Florida drivers find affordable, reliable auto insurance coverage through expert guides and comparisons.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/blog" className="hover:text-blue-400 transition font-bold text-blue-500">Insurance Blog</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Top Cities</h4>
                <ul className="space-y-2 text-sm">
                  {floridaCities.slice(0, 4).map((city) => {
                    const formattedCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    return (
                      <li key={city}>
                        <Link href={`/${city}-auto-insurance`} className="hover:text-white transition">
                          {formattedCity} Auto Insurance
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                </ul>
              </div>

            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 flex items-start text-xs text-slate-500">
              <Info className="h-4 w-4 mr-2 shrink-0 mt-0.5" />
              <p>
                <strong>Advertising Disclosure:</strong> This website is an independent comparison service. We may receive compensation from the providers featured if you click on their links.
              </p>
            </div>
            <div className="mt-4 text-center text-xs text-slate-600">
              &copy; {new Date().getFullYear()} AutoInsuranceCompaniesFlorida.com. All rights reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}