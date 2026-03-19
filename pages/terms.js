import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Auto Insurance Florida</title>
        <meta name="description" content="Terms and conditions for using AutoInsuranceCompaniesFlorida.com and our auto insurance comparison services." />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg prose-blue max-w-none text-slate-700 space-y-6">
          <p>By accessing and using AutoInsuranceCompaniesFlorida.com, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Informational Purposes Only</h2>
          <p>The content on this website is provided for general informational purposes only and does not constitute legal, financial, or professional insurance advice. We are not an insurance agency. We aggregate information to help you compare quotes from our partners.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Third-Party Links and Affiliates</h2>
          <p>Our website may contain links to third-party web sites or services that are not owned or controlled by us. We participate in affiliate programs and may receive compensation if you request a quote through our links. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Accuracy of Information</h2>
          <p>While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, pricing, or related graphics contained on the website.</p>
        </div>
      </main>
    </>
  );
}