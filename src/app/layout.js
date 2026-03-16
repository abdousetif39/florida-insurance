import './globals.css';
import Link from 'next/link';
import { Car, Info } from 'lucide-react';

// إعدادات الـ Metadata الديناميكية الاحترافية
export const metadata = {
  title: {
    default: "Auto Insurance Florida",
    template: "%s | Auto Insurance Florida",
  },
  description: "Compare cheap auto insurance quotes in Florida. Find the best providers, understand PIP laws, and save money today.",
  keywords: 'auto insurance florida, cheap car insurance miami, florida car insurance quotes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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
                <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About Us</Link>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <Car className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="font-bold text-xl text-white">AutoInsurance<span className="text-blue-500">Florida</span></span>
                </div>
                <p className="text-sm text-slate-400 max-w-md">
                  Helping Florida drivers find affordable, reliable auto insurance coverage through expert comparison and comprehensive guides.
                </p>
              </div>
              <div className="flex flex-col space-y-2 text-sm">
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 flex items-start text-xs text-slate-500">
              <Info className="h-4 w-4 mr-2 shrink-0 mt-0.5" />
              <p>
                <strong>Advertising Disclosure:</strong> This website is an independent, advertising-supported comparison service. We may receive compensation from the insurance providers featured on this site if you click on their links.
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