import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Auto Insurance Florida</title>
        <meta name="description" content="Learn how AutoInsuranceCompaniesFlorida.com collects, uses, and protects your personal information and data." />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg prose-blue max-w-none text-slate-700 space-y-6">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>
          <p>At AutoInsuranceCompaniesFlorida.com, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by our website and how it is used.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Log Files & Cookies</h2>
          <p>Like many other Web sites, we make use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Google AdSense & DoubleClick DART Cookie</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google, as a third-party vendor, uses cookies to serve ads on our site.</li>
            <li>Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</li>
            <li>Users may opt-out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Affiliate Disclosure</h2>
          <p>This website contains affiliate links (such as MaxBounty). If you click on an affiliate link and subsequently make a purchase or request a quote, we may earn a commission at no additional cost to you. This helps support the maintenance of this website.</p>
        </div>
      </main>
    </>
  );
}