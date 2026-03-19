import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Auto Insurance Florida</title>
        <meta name="description" content="Get in touch with AutoInsuranceCompaniesFlorida.com for inquiries, partnerships, or questions about our services." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Have a question about Florida auto insurance or want to partner with us? Fill out the form below.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <ContactForm />
        </div>
      </main>
    </>
  );
}