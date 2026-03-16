import Link from 'next/link';
import { Shield, Users, Target } from 'lucide-react';

export const metadata = {
  title: "About Us",
  description: "Learn more about AutoInsuranceCompaniesFlorida.com and our mission to help Florida drivers save on their car insurance.",
};

export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Your trusted partner in navigating the complex world of Florida auto insurance.</p>
      </div>

      <div className="prose prose-lg prose-blue max-w-none text-slate-700 space-y-6 mb-12">
        <p>Welcome to <strong>AutoInsuranceCompaniesFlorida.com</strong>, your number one source for comparing auto insurance rates in the Sunshine State.</p>
        
        <p>Florida drivers face some of the highest insurance premiums in the country due to severe weather, high rates of uninsured drivers, and complex PIP (Personal Injury Protection) laws. Finding affordable coverage shouldn't be a headache.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
          <p className="text-slate-600 text-sm">To provide a transparent platform that connects Florida drivers with top-rated insurance providers.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Unbiased Comparison</h3>
          <p className="text-slate-600 text-sm">We aggregate options from leading carriers so you can find the best coverage at the lowest possible price.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Free Resources</h3>
          <p className="text-slate-600 text-sm">We provide educational guides and resources completely free of charge to help you make an informed decision.</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to start saving?</h2>
        <p className="text-slate-600 mb-6">Join thousands of Florida drivers who have lowered their premiums using our platform.</p>
        <Link href="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition shadow-md">
          Compare Quotes Now
        </Link>
      </div>
    </main>
  );
}