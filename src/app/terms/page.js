export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using AutoInsuranceCompaniesFlorida.com and our comparison services.",
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-blue max-w-none text-slate-700 space-y-6">
        <p>By accessing and using AutoInsuranceCompaniesFlorida.com, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Informational Purposes Only</h2>
        <p>The content on this website is provided for general informational purposes only and does not constitute legal, financial, or professional insurance advice. We are not an insurance agency. We aggregate information to help you compare quotes from our partners.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Third-Party Links</h2>
        <p>Our website may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>
      </div>
    </main>
  );
}