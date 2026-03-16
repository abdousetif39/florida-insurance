export const metadata = {
  title: "Contact Us",
  description: "Get in touch with AutoInsuranceCompaniesFlorida.com for inquiries, partnerships, or questions about our services.",
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-8">Have a question about Florida auto insurance or want to partner with us? Fill out the form below and our team will get back to you within 24-48 hours.</p>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}